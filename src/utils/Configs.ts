import * as fs from "fs";
import * as path from "path";

export class Configs {

  public static getDatabaseConfig() {
    return JSON.parse(fs.readFileSync(path.resolve(__dirname, "config", "database-config.json"), "utf8"));
  }

  public static getLoggingConfig() {
    return JSON.parse(fs.readFileSync(path.resolve(__dirname, "config", "logging-config.json"), "utf8"));
  }

  public static getServerConfig() {
    return JSON.parse(fs.readFileSync(path.resolve(__dirname, "config", "server-config.json"), "utf8"));
  }

}
