var crypto = require("crypto");

this.DEFAULT_SALT_LENGTH = 256;
this.DEFAULT_PASS_LENGTH = 12;
this.DEFAULT_CHARSET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

/*
	Create a cryptographically secure hash using the sha256 algorithm.
	String[val] 	: The word to be hashed. If not included, random data will be generated.
	Boolean[salted] : Should the value be salted before being hashed?
	Int[saltLen] 	: The length of salt to generate. This parameter should not exist unless 'salted' is set.
*/
exports.createHash = function(val, salted, saltLen) {
	var generator = crypto.createHash("sha256");	
	hash = {};
	
	if (typeof val == Boolean) salted = val, val = false;
	if (!val) val = crypto.randomBytes(this.DEFAULT_SALT_LENGTH);
	
	// Set the salt length.
	var slen;
	if (salted) {
		if (saltLen) slen = saltLen;
		else slen = this.DEFAULT_SALT_LENGTH;
	}
	
	// Set the global salt.
	if (this._globalSalt) val = val + this._globalSalt;
	
	if (salted) {
		try {
			hash.salt = crypto.randomBytes(slen);
			hash.hash = createUnsaltedHash(val + hash.salt);
		} catch (ex) {
			console.log(new Date() + " -- Salt creation failed. Falling back to non salted.");
			hash.hash = createUnsaltedHash(val);
		}
	} else {
		hash.hash = createUnsaltedHash(val);
	}
	return hash;
}

exports.setGlobalSalt = function(salt) { this._globalSalt = salt;}
exports.getGlobalSalt = function() { return this._globalSalt; }

/**
 * Creates a new password of specified length, using the specified charset.
 * Integer[length] - The length of password to generate. Defaults to DEFAULT_PASS_LENGTH.
 * String[charset] - The charset to use when generating the password. Defaults to english alphanumeric.
 **/
exports.createPassword = function(length, charset) {
	if (!length)
		length = this.DEFAULT_PASS_LENGTH;
	
	if (!charset)
		charset = DEFAULT_CHARSET;
		
	var pass = "";
	var bytes = crypto.randomBytes(length);
	for (var i = 0; i < length; i++) {
		pass = pass + charset.charAt(bytes[i] % charset.length);
	}
	
	return pass;
}

/**
 * Hashes a password with the global + specified salts and checks for equality.
 * String[str]	-  The string to be checked.
 * String[salt] -  The current salt.
 * String[hash] -  The hash to which we are comparing.
 */
exports.checkHash = function(str, salt, hash) {
	if (this.getGlobalSalt() && salt)
		str = str + this.getGlobalSalt() + salt;
	else if (salt)
		str = str + salt;
	else if (this.getGlobalSalt())
		str = str + this.getGlobalSalt();
	
	return (createUnsaltedHash(str) == hash);
}


function createUnsaltedHash(val) {
	var generator = crypto.createHash("sha256");
	generator.update(val, "ascii");
	return generator.digest("hex");
}
