// const { it } = require("node:test");

const Employee = requirer("./lib/Employee");

describe("Testing Employee Class", () => {
  it("should be able to create instance", () => {
    // data set up
    const name = "Linh";
    const id = 22;
    const email = "linhklatt@yahoo.com";

    // create the case
    const employee = new Employee(name, id, email);
    // make assertion
    expect(employee.name).toBe(name);
    expect(employee.id).toBe(id);
    expect(employee.email).toBe(email);
  });
  it("should be able to get name via constructor argument", () => {
    const name = Linh;
    const employee = new Employee(name, 22, "linhklatt@yahoo.com");
    expect(employee.getName()).toBe(employee.name);
  });

  it("should be able to get id via constructor argument", () => {
    const id = 22;
    const employee = new Employee("Linh", id, "linhklatt@yahoo.com");
    expect(employee.getId()).toBe(employee.id);
  });
  it("should be able to set email via constructor argument", () => {
    const email = "linhklatt@yahoo.com";
    const employee = new Employee("Linh", 22, email);
    expect(employee.getEmail()).toBe(employee.email);
  });
});
