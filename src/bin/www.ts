import * as http from "http";
import ExpressApp from "../app";

class ExpressServer {

  private port: number | string | boolean;
  private server: http.Server;

  constructor() {
    this.port = this.normalizePort(process.env.PORT || 3000);
    ExpressApp.set("port", this.port);
  }

  public start() {
    this.server = http.createServer(ExpressApp);
    this.server.listen(this.port, this.onListening);
    this.server.on("error", this.onError);
  }

  private normalizePort(val: any): number | string | boolean {
    const p = parseInt(val, 10);

    if (isNaN(p)) {
      return val;
    }

    if (p >= 0) {
      return p;
    }

    return false;
  }

  private onError = (error) => {
    if (error.syscall !== "listen") {
      throw error;
    }

    const bind = typeof this.port === "string" ? "Pipe " + this.port : "Port " + this.port;

    switch (error.code) {
      case "EACCES":
        console.error(bind + "requires elevated privileges");
        process.exit(1);
        break;
      case "EADDRINUSE":
        console.error(bind + "is already in use");
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

  private onListening = () => {
    const addr = this.server.address();
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
    console.log("Listening on " + bind);
  }

}

new ExpressServer().start();
