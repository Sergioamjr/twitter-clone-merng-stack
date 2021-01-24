import { getNameInitials } from "~utils";

describe("utils", () => {
  it("should test getNameInitials method", () => {
    const asserts = [
      ["Sergio", "S"],
      ["John Jonny", "JJ"],
      ["Mike Joe Antony", "MJ"],
      ["mary", "M"],
    ];

    for (const [name, result] of asserts) {
      expect(getNameInitials(name)).toBe(result);
    }
  });
});
