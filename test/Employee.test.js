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
});
