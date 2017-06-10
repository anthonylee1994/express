import {DefaultService} from "../services/DefaultService";
const packageJSON = require("../../package.json");

export class DefaultController {
    public static async Index(req, res) {
        await DefaultService.Foo();
        res.render("index", {
            title: "Express",
        });
    }
}
