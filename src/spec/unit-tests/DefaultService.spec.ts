import {DefaultService} from "../../services/DefaultService";
describe("test foo", () => {
    it("should return true", () => {
        expect(DefaultService.Foo()).toBe(true);
    });
});
