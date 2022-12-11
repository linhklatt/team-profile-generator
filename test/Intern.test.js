// const { it } = require("node:test");

const Intern = requirer("./lib/intern");

describe("Testing intern Class", () => {
  it("should be able to create instance", () => {
    // data set up
    const name = "Linh";
    const id = 22;
    const email = "linhklatt@yahoo.com";
    const school = "UCSD Bootcamp";
    // create the case
    const intern = new intern(name, id, email, school);
    // make assertion
    expect(intern.name).toBe(name);
    expect(intern.id).toBe(id);
    expect(intern.email).toBe(email);
    expect(intern.school).toBe(school);
  });
  it("should be able to get name via constructor argument", () => {
    const name = Linh;
    const intern = new intern(name, 22, "linhklatt@yahoo.com", "UCSD Bootcamp");
    expect(intern.getName()).toBe(intern.name);
  });

  it("should be able to get id via constructor argument", () => {
    const id = 22;
    const intern = new intern(
      "Linh",
      id,
      "linhklatt@yahoo.com",
      "UCSD Bootcamp"
    );
    expect(intern.getId()).toBe(intern.id);
  });
  it("should be able to set email via constructor argument", () => {
    const email = "linhklatt@yahoo.com";
    const intern = new intern("Linh", 22, email, "UCSD Bootcamp");
    expect(intern.getEmail()).toBe(intern.email);
  });
  it("should be able to get github username via constructor argument", () => {
    const school = "UCSD Bootcamp";
    const intern = new intern("Linh", 22, "linhklatt@yahoo.com", school);
    expect(intern.getEmail()).toBe(intern.school);
  });
});
