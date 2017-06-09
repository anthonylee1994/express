import {DefaultService} from "../services/DefaultService";
const packageJSON = require("../../package.json");

export class DefaultController {
    public static Index(req, res) {
        DefaultService.Foo();
        res.json({
            application: packageJSON.name,
        });
    }
}
