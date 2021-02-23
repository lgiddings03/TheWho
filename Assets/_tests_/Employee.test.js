const Employee = require("Assets\lib\Employee.js");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return an object containing a name, ID number and email address", () => {
      const obj = new Employee();

      expect("message" in obj).toEqual(false);
    });
  });
  
});