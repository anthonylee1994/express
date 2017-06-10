import * as cluster from "cluster";
import { Request, Response } from "express";
import * as mkdirp from "mkdirp";
import * as path from "path";
const { Logger, transports } = require("winston");
import { Configs } from "./Configs";

const config = Configs.getLoggingConfig();
config.directory = __dirname;
config.debug.file.filename = path.resolve(config.directory, "logs", config.debug.file.filename);
config.info.file.filename = path.resolve(config.directory, "logs", config.info.file.filename);
config.error.file.filename = path.resolve(config.directory, "logs", config.error.file.filename);

if (cluster.isMaster) {
  mkdirp.sync(path.join(config.directory, "logs"));
}

let transportsConf = [];

if (process.env.NODE_ENV === "production") {
  transportsConf = [
    new transports.File(config.info.file),
    new transports.Console(config.info.console),
  ];
} else {
  transportsConf = [
    new transports.File(config.debug.file),
    new transports.Console(config.debug.console),
  ];
}

export const log = new Logger({transports: transportsConf, exitOnError: false});
