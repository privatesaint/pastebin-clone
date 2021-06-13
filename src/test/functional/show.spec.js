import supertest from "supertest";
import app from "../../app";

const request = supertest(app);

describe("Get Content in PasteBin", () => {
  test("should be able to get stored content with valid url", async () => {
    const result = await request.post("/api/pastebin").send({
      content: "hello world!!!",
      expiredAt: "2021-12-02",
    });

    const { data } = result.body;
    const slug = data.url.split("/").slice(-1).join("");

    const response = await request.get(`/api/pastebin/${slug}`).send();
    expect(response.status).toEqual(200);
    expect(response.body.success).toEqual(true);
    expect(response.body.data.content).toEqual("hello world!!!");
  });

  test("should not be able to get stored content with invalid url", async () => {
    const result = await request.get("/api/pastebin/hey").send();

    expect(result.status).toEqual(404);
    expect(result.body.success).toEqual(false);
    expect(result.body.message).toEqual("Content not found");
  });
});
