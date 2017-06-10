import {log} from "../utils/Logger";

export class DefaultService {
    public static Foo(): boolean {
        log.debug("Logging Here");
        return true;
    }
}
