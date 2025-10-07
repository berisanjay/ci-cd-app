const request = require("supertest");
const app = require("../app");
describe("GET /", () => {
  it("should return 200 OK", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
  });
});


describe("Account creation tests", () => {
  test("should fail if password does not match regex", async () => {
    const res = await request(app)
      .post("/create-account")
      .send({ username: "test", password: "abc123" });
    expect(res.status).toBe(400);
  });

  test("should pass if password matches regex", async () => {
    const res = await request(app)
      .post("/create-account")
      .send({ username: "testuser", password: "Test@1234" });
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Account created successfully!");
  });
});
