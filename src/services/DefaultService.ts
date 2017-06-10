import {Models} from "../models/index";
import {log} from "../utils/Logger";

export class DefaultService {
    public static async Foo() {
        await Models.Product.create({
            name: String(Math.random()),
            description: String(Math.random()),
        });
        log.debug("Logging Here");
        return true;
    }
}
