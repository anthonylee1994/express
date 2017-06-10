import {DefaultService} from "../services/DefaultService";
const packageJSON = require("../../package.json");

export class DefaultController {
    public static Index(req, res) {
        DefaultService.Foo();
        res.render("index", {
            title: "Express",
        });
    }
}
