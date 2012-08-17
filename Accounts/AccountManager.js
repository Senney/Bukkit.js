var hash = require("./Hash.js"),
	fs = require("fs"),
	path = require("path"),
	util = require("../Util.js");

this.AccountManager = function(directory, globalSalt) {
	util.Debug("Account manager created for: " + directory);

	globalSalt & hash.setGlobalSalt(globalSalt);
	this._accounts = [];
	
	this.ReloadAccounts = function(directory) {
		util.Debug("Reloading accounts from: " + directory);
	
		var accts = this._accounts;
		var files = fs.readdirSync(directory);
		for (file in files) {
			// If there is no extension...
			var fname = files[file];
			if (path.extname(fname) == "") {
				util.Debug("Found user account: <" + fname + ">.");
				var data = fs.readFileSync(directory + fname);
				if (data) {
					data = String(data);
					
					var parts = data.split("\n\n");
					var salt = parts[0];
					var userhash = parts[1];
					
					var account = { password: userhash, salt: salt };
					accts[fname] = account;
				}
			}
		}
	}
	
	this.Login = function(username, password) {
		util.Debug("Attempting to log in user: " + username);
		
		var user = this._accounts[username];
		if (user)
			if (hash.checkHash(password, user.salt, user.password))
				return true;
		
		return false;
	}

	// Load all accounts in to an array for easy checking.
	this.ReloadAccounts(directory);
	return this;
}

module.exports = this.AccountManager;