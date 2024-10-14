const request = require("supertest");
const express = require("express");
const calculatorRoutes = require("./routes/calculator");
const secretRoutes = require("./routes/secret");

const app = express();
app.use(express.json());
app.use("/api/calculator", calculatorRoutes);
app.use("/api", secretRoutes);

// Test for calculator routes
describe("Calculator API", () => {
  it("should add two numbers", async () => {
    const res = await request(app).post("/api/calculator/addition").send({ a: 2, b: 3 });
    expect(res.statusCode).toEqual(200);
    expect(res.body.result).toEqual(5);
  });

  it("should subtract two numbers", async () => {
    const res = await request(app).post("/api/calculator/substract").send({ a: 5, b: 3 });
    expect(res.statusCode).toEqual(200);
    expect(res.body.result).toEqual(2);
  });

  it("should multiply two number", async () => {
    const res = await request(app).post("/api/calculator/multiply").send({ a: 6, b: 3 });
    expect(res.statusCode).toEqual(200);
    expect(res.body.result).toEqual(18);
  });

  it("should divide two numbers", async () => {
    const res = await request(app).post("/api/calculator/divide").send({ a: 6, b: 3 });
    expect(res.statusCode).toEqual(200);
    expect(res.body.result).toEqual(2);
  });

  it("should return error for division by zero", async () => {
    const res = await request(app).post("/api/calculator/divide").send({ a: 6, b: 0 });
    expect(res.statusCode).toEqual(400);
    expect(res.body.error).toEqual("Division by zero is not allowed");
  });
});

// Test for secret route
describe("Secret API", () => {
  it("should return the secret message", async () => {
    process.env.SECRET_MESSAGE = "This is a demo secret message!";
    const res = await request(app).get("/api/secret");
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual("This is a demo secret message!");
  });
});
