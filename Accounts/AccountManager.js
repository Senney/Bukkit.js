var hash = require("./Hash.js"),
	fs = require("fs"),
	path = require("path"),
	util = require("../Util.js"),
	validator = require("validator");

function AccountManager(directory, globalSalt) {
	util.Debug("Account manager created for: " + directory);

	globalSalt & hash.setGlobalSalt(globalSalt);
	this._accounts = [];
	this._dir = __dirname + "/" + directory;
	
	this.ReloadAccounts = function() {
		util.Debug("Reloading accounts from: <" + this._dir + ">");
	
		var accts = [];
		var files = fs.readdirSync(this._dir);
		for (file in files) {
			// If there is no extension...
			var fname = files[file];
			if (path.extname(fname) == "") {
				var data = fs.readFileSync(this._dir + fname);
				if (data) {
					data = String(data);
					
					var parts = data.split("\n\n");
					var salt = parts[0];
					var userhash = parts[1];
					var adminLevel = parts[2];
					
					var account = { password: userhash, salt: salt, admin: (adminLevel == "1") };
					accts[fname] = account;
					
					util.Debug(fname + " : " + account.admin);
				}
			}
		}
		this._accounts = accts;
		return this;
	}
	
	this.Login = function(username, password) {
		util.Debug("Attempting to log in user: " + username);
		
		var user = this._accounts[username];
		if (user) {
			if (hash.checkHash(password, user.salt, user.password))
				return true;
		}
		
		return false;
	}
	
	this.Exists = function(acct) {
		return (this._accounts[acct] != undefined);
	}
	
	this.DeleteAccount = function(acct) {
		var filename = this._dir + acct;
		var exists = this.Exists(acct);
		
		if (exists) {
			fs.unlinkSync(filename);
			this.ReloadAccounts();
			util.Debug("Account " + acct + " deleted!");
		} else {
			util.Debug("Account " + acct + " cannot be deleted!");
		}
		
		return this;
	}
	
	this.CreateAccount = function(username, password, adminLevel, callback) {
		if (this.Exists(username))
			return false;
			
		// adminLevel isn't required.
		if (typeof adminLevel == "function") {
			callback = adminLevel;
			adminLevel = false;
		}
		
		username = validator.sanitize(username).entityEncode();
		var userhash = hash.createHash(password, true);
	
		var data = userhash.salt + "\n\n" + userhash.hash + "\n\n" + (adminLevel ? "1" : "0");
		var mgr = this;
		fs.writeFile(this._dir + username, data, function(err) {
			if (err) {
				util.Debug("Account: " + username + " could not be created!");
			} else {
				util.Debug("Account: " + username + " was created.");				
				mgr.ReloadAccounts();
			}
			callback && callback(err, username);
		});
		
		return this;
	}
	
	this.Admin = function(username) {
		var usr = this._accounts[username];
		return (usr ? usr.admin : false);
	}
	
	this.ChangePassword = function(username, newpass, callback) {
		if (!this.Exists(username))
			return false;
		
		// Retain old admin.
		var oldAdmin = this.Admin(username);
		
		// Delete the old accounts.
		this.DeleteAccount(username);
		
		// Recreate the account
		this.CreateAccount(username, newpass, oldAdmin, callback);
		return this;
	}
	
	this.ChangeAdmin = function(username, newLevel, callback) {
		util.Debug("Changing administration level for " + username + " to " + newLevel);
		if (!this.Exists(username)) {
			util.Debug("ChangeAdmin: User " + username + " does not exist!");
			return false;
		}
		
		var mgr = this;
		fs.readFile(this._dir + username, function(err, data) {
			if (err) {
				callback && callback(err);
				return;
			}
			
			data = String(data);
			data = data.substring(0, data.length - 2) + (newLevel ? "1" : "0");
			fs.writeFile(username, data, function(err) {
				util.Debug("ChangeAdmin: Admin level updated for " + username + ".");
				mgr.ReloadAccounts();
				callback && callback(err);
			});
		});
		
		return this;
	}

	// Load all accounts in to an array for easy checking.
	this.ReloadAccounts();
}

(new AccountManager("", "Bukkit.js")).ChangeAdmin("Senney", true);

module.exports = AccountManager;