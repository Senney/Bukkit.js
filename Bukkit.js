var Config = require("./Config.js"),
	spawn = require("child_process").spawn;

this.Bukkit = [];

this.Bukkit.CreateServer = function(path, host, port) {
	path = path ? path : Config.Bukkit.ExecutablePath;
	host = host ? host : Config.Network.Host;
	port = port ? port : Config.Network.Port;
	
	console.log("Starting bukkit server...");
	var java_args = ["-Xmx" + Config.System.Xmx, "-Xms" + Config.System.Xms, "-jar", path, "-h", host, "-p", port];
	this._bukkitHandle = spawn(Config.System.JavaPath, java_args);
	
	this._log = "";
	
	this._bukkitHandle.on("exit", function() {
	
	});
	
	this._bukkitHandle.on("close", function() {
		console.log("Server shut down!");
	});
	
	var srv = this;
	this._bukkitHandle.stderr.on("data", function(data) {
		srv._log = srv._log + String(data);
	});
}

this.Bukkit.GetLog = function() {
	return this._log;
}

this.Bukkit.ClearLog = function() {
	this._log = "";
}

this.Bukkit.StopServer = function() {
	this.SendCommand("stop");
	this._endProcess();
}

this.Bukkit.SendCommand = function(command) {
	if (this._bukkitHandle) {
		this._bukkitHandle.stdin.write(command + "\r");
	}
}

this.Bukkit._endProcess = function() {
	if (this._bukkitHandle) {
		this._bukkitHandle.stdin.end();
		this._bukkitHandle = undefined;
	}
}

module.exports = this.Bukkit;