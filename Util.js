var config = require("./Config.js");

this.Utils = [];

this.Utils.ShortDate = function(time) {
	var d = time ? new Date(time) : new Date();
	return d.getDay() + "-" + d.getMonth() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

this.Utils.Debug = function(data) {
	if (config.Debug.Enabled) {
		console.log("[" + this.ShortDate() + "]: " + data);
	}
}

module.exports = this.Utils;