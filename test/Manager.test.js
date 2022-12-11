// const { it } = require("node:test");

const Manager = requirer("./lib/Manager");

describe("Testing manager Class", () => {
  it("should be able to create instance", () => {
    // data set up
    const name = "Linh";
    const id = 22;
    const email = "linhklatt@yahoo.com";
    const officeNumber = 223;
    // create the case
    const manager = new manager(name, id, email, officeNumber);
    // make assertion
    expect(manager.name).toBe(name);
    expect(manager.id).toBe(id);
    expect(manager.email).toBe(email);
    expect(manager.officeNumber).toBe(officeNumber);
  });
  it("should be able to get name via constructor argument", () => {
    const name = Linh;
    const manager = new manager(name, 22, "linhklatt@yahoo.com", 223);
    expect(manager.getName()).toBe(manager.name);
  });

  it("should be able to get id via constructor argument", () => {
    const id = 22;
    const manager = new manager("Linh", id, "linhklatt@yahoo.com", 223);
    expect(manager.getId()).toBe(manager.id);
  });
  it("should be able to set email via constructor argument", () => {
    const email = "linhklatt@yahoo.com";
    const manager = new manager("Linh", 22, email, 223);
    expect(manager.getEmail()).toBe(manager.email);
  });
  it("should be able to get github username via constructor argument", () => {
    const officeNumber = 223;
    const manager = new manager(
      "Linh",
      22,
      "linhklatt@yahoo.com",
      officeNumber
    );
    expect(manager.getEmail()).toBe(manager.officeNumber);
  });
});
