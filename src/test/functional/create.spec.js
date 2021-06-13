import supertest from "supertest";
import app from "../../app";

const request = supertest(app);

describe("Store Content in PasteBin", () => {
  test("should be able to store content in bin", async () => {
    const result = await request.post("/api/pastebin").send({
      content: "hello world!!!",
      expiredAt: "2021-12-02",
    });

    expect(result.body.success).toEqual(true);
    expect(result.status).toEqual(201);
  });

  test("should be able to store content in bin without expire data", async () => {
    const result = await request.post("/api/pastebin").send({
      content: "hello world!!!",
      expiredAt: "",
    });

    expect(result.body.success).toEqual(true);
    expect(result.status).toEqual(201);
  });

  test("should not be able to store content in bin with empty content", async () => {
    const result = await request.post("/api/pastebin").send({
      content: "",
      expiredAt: "",
    });

    expect(result.body.success).toEqual(false);
    expect(result.status).toEqual(400);
    expect(result.body.message).toEqual("Content is required");
  });

  test("should not be able to store content in bin with past date", async () => {
    const result = await request.post("/api/pastebin").send({
      content: "hey you!!!",
      expiredAt: "2020-01-01",
    });

    expect(result.body.success).toEqual(false);
    expect(result.status).toEqual(400);
    expect(result.body.message).toEqual("Expired date must be more than today");
  });

  test("should not be able to store content in bin with invalid date format", async () => {
    const result = await request.post("/api/pastebin").send({
      content: "hey you!!!",
      expiredAt: "01-01-2020",
    });

    expect(result.body.success).toEqual(false);
    expect(result.status).toEqual(400);
    expect(result.body.message).toEqual("Invalid date format");
  });
});
