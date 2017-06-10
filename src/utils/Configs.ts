import * as fs from "fs";
import * as path from "path";

const configPath = (process.env.NODE_ENV === "test") ? path.resolve( __dirname, "../") : __dirname;

export class Configs {

  public static getDatabaseConfig() {
    return JSON.parse(fs.readFileSync(path.resolve(configPath, "config", "database-config.json"), "utf8"));
  }

  public static getLoggingConfig() {
    return JSON.parse(fs.readFileSync(path.resolve(configPath, "config", "logging-config.json"), "utf8"));
  }

  public static getServerConfig() {
    return JSON.parse(fs.readFileSync(path.resolve(configPath, "config", "server-config.json"), "utf8"));
  }

}
