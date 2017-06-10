import {DefaultService} from "../../services/DefaultService";
describe("test foo", () => {
    it("should return true", (done) => {
        DefaultService.Foo().then((x) => {
            expect(false).toBe(true);
            done();
        });
    });
});
