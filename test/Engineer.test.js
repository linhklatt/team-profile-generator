// const { it } = require("node:test");

const Engineer = requirer("./lib/engineer");

describe("Testing engineer Class", () => {
  it("should be able to create instance", () => {
    // data set up
    const name = "Linh";
    const id = 22;
    const email = "linhklatt@yahoo.com";
    const github = "linhklatt";
    // create the case
    const engineer = new engineer(name, id, email, github);
    // make assertion
    expect(engineer.name).toBe(name);
    expect(engineer.id).toBe(id);
    expect(engineer.email).toBe(email);
    expect(engineer.github).toBe(github);
  });
  it("should be able to get name via constructor argument", () => {
    const name = Linh;
    const engineer = new engineer(name, 22, "linhklatt@yahoo.com", "linhklatt");
    expect(engineer.getName()).toBe(engineer.name);
  });

  it("should be able to get id via constructor argument", () => {
    const id = 22;
    const engineer = new engineer(
      "Linh",
      id,
      "linhklatt@yahoo.com",
      "linhklatt"
    );
    expect(engineer.getId()).toBe(engineer.id);
  });
  it("should be able to set email via constructor argument", () => {
    const email = "linhklatt@yahoo.com";
    const engineer = new engineer("Linh", 22, email, "linhklatt");
    expect(engineer.getEmail()).toBe(engineer.email);
  });
  it("should be able to get github username via constructor argument", () => {
    const github = "linhklatt";
    const engineer = new engineer("Linh", 22, "linhklatt@yahoo.com", github);
    expect(engineer.getEmail()).toBe(engineer.github);
  });
});
