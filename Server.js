
// Import libraries for handling child processes.
var	http = require("http"),
	bukkit = require("./Bukkit.js"),
	util = require("./Util.js"),
	Config = require("./Config.js"),
	Express = require("express");
	
// Create the Express webapp.
var app = Express();

// Configure Express.
app.configure(function() {
	app.set('views', __dirname + '/Views/');
	app.use(Express.static(__dirname + '/Static/'));
	
	util.Debug("Views directory set to: " + app.get('views'));

	app.use(Express.bodyParser());
	app.use(Express.cookieParser());
	app.use(Express.session({secret: 'MinecraftNode'}));
	app.use(Express.methodOverride());
	
	app.engine("jade", require("jade").__express);
});

bukkit.CreateServer();

// The root page.
app.get('/', function(req, res) {
	util.Debug("Request from " + req.connection.remoteAddress + " for /.");
	res.render('Main.jade', { logContents: bukkit.GetLog() });
});

app.post('/Login', function(req, res) {
	
});

util.Debug("Server listening on port 8080.");
app.listen(8080);

process.on('exit', function() { bukkit.StopServer(); });
process.on('SIGINT', function() { 
	console.log("Process ending in " + Config.Bukkit.ShutdownTime / 1000 + " seconds!"); 
	bukkit.StopServer(); 
	setTimeout(function() { process.exit(0); }, Config.Bukkit.ShutdownTime);
});