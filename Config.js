this.Config = [];
this.Config.Bukkit = [];
this.Config.System = [];
this.Config.Network = [];

// Server configuration.
this.Config.Bukkit.ExecutablePath = "CraftBukkit.jar"

// System configuration.
this.Config.System.JavaPath = "java"
this.Config.System.Xmx = "768M"
this.Config.System.Xms = "768M"

// Network configuration
this.Config.Network.Host = "127.0.0.1";
this.Config.Network.Port = 25565

module.exports = this.Config;