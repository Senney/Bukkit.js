var Config = require("./Config.js"),
	spawn = require("child_process").spawn,
	util = require("./Util.js");

this.Bukkit = [];

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
		util.Debug("Process closing.");
		console.log("Server shut down!");
	});
	
	var srv = this;
	this._bukkitHandle.stderr.on("data", function(data) {
		// Linux color code removal regex:
		// http://www.commandlinefu.com/commands/view/3584/remove-color-codes-special-characters-with-sed
		// "s/\x1B\[([0-9]{1,2}(;[0-9]{1,2})?)?[m|K]//g"
		var re = /\x1B\[([0-9]{1,2}(;[0-9]{1,2})?)?[m|K]/g
		srv._log = srv._log + String(data).replace(re, "");
	});
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
		this.SendCommand("stop");
		this._endProcess();
	}
}

this.Bukkit.Broadcast = function(message) {
	this.SendCommand("say " + message);
}

this.Bukkit.SendCommand = function(command) {
	if (this._bukkitHandle) {
		util.Debug("Command issued: [" + command + "]");
		this._bukkitHandle.stdin.write(command + "\r");
	} else {
		util.Debug("ERROR: Server is not online. Cannot send command: [" + command + "]");
	}
}

this.Bukkit._endProcess = function() {
	util.Debug("Ending bukkit process.");
	if (this._bukkitHandle) {
		this._bukkitHandle.stdin.end();
		this._bukkitHandle = undefined;
	}
}

this.Bukkit.BackupServer = function() {
	util.Debug("Running server backup.");

	var shell_args = ["BackupServer.sh"];
	
	var backupHandle = spawn("sh", shell_args);
	this.backupHandle.stdout.on("data", function(data) {
	});
}

module.exports = this.Bukkit;