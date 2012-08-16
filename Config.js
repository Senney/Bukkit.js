this.Config = [];
this.Config.Bukkit = [];
this.Config.System = [];
this.Config.Network = [];
this.Config.Debug = [];

// Server configuration.
this.Config.Bukkit.BukkitDirectory = "Bukkit/";
this.Config.Bukkit.ExecutablePath = "CraftBukkit.jar";
this.Config.Bukkit.BackupScript = "BackupServer.sh";
// Backup every half hour. (value in ms)
this.Config.Bukkit.BackupTime = 30 * 60 * 1000;
this.Config.Bukkit.ShutdownTime = 5 * 1000;

// System configuration.
this.Config.System.JavaPath = "java";
this.Config.System.Xmx = "128M";
this.Config.System.Xms = "128M";

// Network configuration
this.Config.Network.Host = "minecraft.senney.net";
this.Config.Network.Port = 46000;

this.Config.Debug.Enabled = true;

module.exports = this.Config;