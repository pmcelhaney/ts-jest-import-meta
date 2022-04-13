import { importMetaUrl  } from "./esm";

describe("import.meta.url", () => {
    it("should be supported within the test file", () => {
        expect(() => import.meta.url).not.toThrow();
    });

    it("should be supported within a production code file", () => {
        expect(importMetaUrl).not.toThrow();
    });
})