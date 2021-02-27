import { getNameInitials, omit } from "~utils";

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

  it("should test omit method", () => {
    const asserts = [
      [{ name: "Jonny", age: 2 }, "age", { name: "Jonny" }],
      [{ name: "Jonny", age: 2 }, "name", { age: 2 }],
      [{ name: "Jonny", age: 2 }, "", { name: "Jonny", age: 2 }],
    ];

    for (const [name, toOmit, finalObject] of asserts) {
      expect(omit(name, [toOmit as string])).toEqual(finalObject);
      expect(omit(name, [toOmit as string])).not.toHaveProperty(
        toOmit as string
      );
    }
  });
});
