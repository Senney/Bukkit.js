var Config = require("./Config.js"),
	spawn = require("child_process").spawn,
	util = require("./Util.js"),
	items = require("./BukkitItems.js");

this.Bukkit = {};

this.Bukkit._eventHandlers = {};
this.Bukkit._users = {};

const LOG_FILTER_REG = /\[CONSOLE->.*\]/i;

this.Bukkit.CreateServer = function(path, host, port) {
	path = path ? path : Config.Bukkit.ExecutablePath;
	host = host ? host : Config.Network.Host;
	port = port ? port : Config.Network.Port;
	
	console.log("Starting bukkit server...");
	
	// Create the arguments to be passed in to java.
	var java_args = ["-Xmx" + Config.System.Xmx, "-Xms" + Config.System.Xms, "-jar", path, "-h", host, "-p", port];
	util.Debug("Arguments: " + java_args);
	
	// Set the working directory to the proper bukkit directory.
	var spawn_args = { cwd: Config.Bukkit.BukkitDirectory };
	util.Debug("Working directory: " + Config.Bukkit.BukkitDirectory);
	
	// Spawn the process and save the handle.
	this._bukkitHandle = spawn(Config.System.JavaPath, java_args, spawn_args);
	util.Debug("Process PID: " + this._bukkitHandle.pid);
	
	// Initialize the log.
	this._log = "";
	
	// Create the handlers for various events.
	this._bukkitHandle.on("close", function() {
		this.emit("srv:close");
		util.Debug("Process closing.");
		console.log("Server shut down!");
	});
	
	var srv = this;
	this._bukkitHandle.stderr.on("data", function(data) {
		// Linux color code removal regex:
		// http://www.commandlinefu.com/commands/view/3584/remove-color-codes-special-characters-with-sed
		// "s/\x1B\[([0-9]{1,2}(;[0-9]{1,2})?)?[m|K]//g"
		var re = /\x1B\[([0-9]{1,2}(;[0-9]{1,2})?)?[m|K]/g
		
		data = String(data);
		// Strip all whispers, as they are private information.
		
		var m = data.match(LOG_FILTER_REG)
		if (!m)
			srv._log = srv._log + data.replace(re, "");
		
		var match = undefined;
		
		// Check if the log item is a user logging in.
		if (match = (/\[INFO\] (.*?) logged*/.exec(data))) {
			var brackIndex = match[1].indexOf("[");
			var uname = match[1].substring(0, brackIndex);
			var ip = match[1].substring(brackIndex + 2, match[1].length - 1);
			
			util.Debug("User <" + uname + " [" + ip +"]> connected to the server.");
			srv._users[uname] = { name: uname, address: ip };
			
			srv.emit("srv:user-connect", srv._users[uname]);
		} else if (match = (/\[INFO\] (.*?) lost connection/.exec(data))) {	// Check if a user has disconnected.
			var uname = srv._users[match[1]];
			if (uname)
				util.Debug("User <" + uname.name + " ["+uname.address+"]> has left the server.");
			
			delete srv._users[uname];
			srv.emit("srv:user-disconnect");
		}
	});
}

this.Bukkit.on = function(event, callback) {
	if (this._eventHandlers[event]) {
		this._eventHandlers[event].push(callback);
	} else {
		this._eventHandlers[event] = [];
		this._eventHandlers[event].push(callback);
	}
}

this.Bukkit.emit = function(event, args) {
	var e = this._eventHandlers[event];
	
	if (e) {
		for (x in e) {
			e[x](args);
		}
	}
}

this.Bukkit.GetUsers = function() {
	return this._users;
}

this.Bukkit.GetUser = function(name) {
	return this._users[name];
}

this.Bukkit.GetLog = function() {
	return this._log;
}

this.Bukkit.ClearLog = function() {
	util.Debug("Log cleared.");
	this._log = "";
}

this.Bukkit.StopServer = function() {
	if (this._bukkitHandle) {
		this.emit("cmd:stop");
		this.SendCommand("stop");
		this._endProcess();
	}
}

this.Bukkit.Broadcast = function(message) {
	this.emit("cmd:say");
	this.SendCommand("say " + message);
}

this.Bukkit.Tell = function(player, message) {
	this.emit("cmd:whisper");
	this.SendCommand("tell " + player + " " + message);
}

this.Bukkit.SendCommand = function(command) {
	this.emit("cmd:send");
	if (this._bukkitHandle) {
		util.Debug("Command issued: [" + command + "]");
		try {
			this._bukkitHandle.stdin.write(command + "\r");
		} catch (err) {
			util.Debug("Socket might be closed. Cannot send messages! Error: " + err.message);
		}
	} else {
		util.Debug("ERROR: Server is not online. Cannot send command: [" + command + "]");
	}
}

this.Bukkit.GiveItem = function(player, item, quantity, modifier) {
	if (arguments.length < 3)
		throw "Bukkit.GiveItem requires at least 3 parameters.";

	var _item = items.GetItem(item);
	var _mod = items.GetModifier(item, modifier)
	
	if (_mod && modifier) modifier = _mod
	else modifier = "";
	
	if (_item) {
		this.emit("cmd:give");
	
		var cmd = ["give", player, item, quantity, modifier];
		cmd = cmd.join(" ");
		
		this.SendCommand(cmd);
	} else {
		this.emit("cmd:give:fail");
	}
}

this.Bukkit._endProcess = function() {
	util.Debug("Ending bukkit process.");
	if (this._bukkitHandle) {
		this.emit("srv:end");
		this._bukkitHandle.stdin.end();
		this._bukkitHandle = undefined;
	}
}

module.exports = this.Bukkit;