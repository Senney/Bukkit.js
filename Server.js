
// Import libraries for handling child processes.
var	http = require("http"),
	bukkit = require("./Bukkit.js"),
	util = require("./Util.js"),
	Config = require("./Config.js"),
	Express = require("express"), 
	hash = require("./Accounts/Hash.js"),
	fs = require("fs"),
	AccountManager = require("./Accounts/AccountManager.js"),
	os = require("os");
	
// Create the Express webapp.
var app = Express();

// Create an AccountManager
var Acct = new AccountManager("", Config.System.GlobalSalt);

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
	
	hash.setGlobalSalt(Config.System.GlobalSalt);
});

bukkit.CreateServer();
bukkit.on("srv:user-connect", function (data) {
	if (Acct.Exists(data.name)) {
		bukkit.Broadcast("Welcome back, " + data.name + "!!");
	} else {
		bukkit.Broadcast(data.name + " has connected to the server! Welcome, " + data.name + "!");
		var upw = hash.createPassword(6, "abcdefghijklmnopqrstuvwxyz0123456789");
		Acct.CreateAccount(data.name, upw, function(err, username) {
			if (err)
				util.Debug("Error creating account for: " + username);
			
			bukkit.Tell(data.name, "Visit http://www.senney.net:8080/ and log in with the following...");
			bukkit.Tell(data.name, "U/N: " + data.name);
			bukkit.Tell(data.name, "P/W: " + upw);
		});
	}
	
});

// The root page.
app.get('/', function(req, res) {
	if (req.session.user) {
		res.redirect("/Panel");
	}

	util.Debug("Request from " + req.connection.remoteAddress + " for /.");
	res.render('Main.jade', { logContents: bukkit.GetLog(), stats: getServerInfo() });
});

app.post('/Login', function(req, res) {
	var username = req.body.uname;
	var password = req.body.pword;
	
	if (!username || !password)
		res.redirect(301, "/");
	
	if (Acct.Login(username, password)) {
		req.session.user = username;
	
		util.Debug(username + " was logged in successfully.");
		res.redirect(301, "/Panel");
		return;
	}
	
	util.Debug(username + " was invalid.");
	res.redirect(301, "/");
});

app.get('/Panel', function(req, res) {	
	if (!req.session.user)
		res.redirect("/");
		
	res.render('Panel.jade', {
		logContents: bukkit.GetLog(),
		stats: getServerInfo(),
		admin: Acct.Admin(req.session.user)
	});
});

app.post('/Panel/:Type', function(req, res) {
	if (!req.session.user)
		res.redirect("/");
	
	util.Debug("Panel request: " + req.params.Type);
	switch(req.params.Type) {
		case "Message":
			var msg = req.body.message;
			if (msg.length < Config.Bukkit.MaxChatMessage)
				bukkit.Broadcast(msg);
			break;
		case "Command":
			var cmd = req.body.command;
			bukkit.SendCommand(cmd);
			break;
		case "Give":
		
			break;
	}
	
	setTimeout(function() { res.redirect("/Panel"); }, 500);
});

app.get('/Log', function(req, res) {
	res.send(bukkit.GetLog());
});

function getServerInfo() {
	return { 	CPUUse: os.loadavg(),
				MemFree: os.freemem(),
				MemTotal: os.totalmem(),
				Uptime: os.uptime(),
				Type: os.platform() + " " + os.release() + " " + os.arch()
			};
}

util.Debug("Server listening on port " + Config.Network.WebPort);
app.listen(Config.Network.WebPort);

process.on('exit', function() { bukkit.StopServer(); });
process.on('SIGINT', function() { 
	console.log("Process ending in " + Config.Bukkit.ShutdownTime / 1000 + " seconds!"); 
	bukkit.StopServer(); 
	setTimeout(function() { process.exit(0); }, Config.Bukkit.ShutdownTime);
});
