
// Import libraries for handling child processes.
var	http = require("http"),
	bukkit = require("./Bukkit.js");

bukkit.CreateServer();
	
http.createServer(function(request, response) {
	response.write(bukkit.GetLog());
	response.end();
}).listen(8080);

process.on('exit', function() { bukkit.StopServer(); });
process.on('SIGINT', function() { bukkit.StopServer(); setTimeout(function() { process.exit(0); }, 1000); } );