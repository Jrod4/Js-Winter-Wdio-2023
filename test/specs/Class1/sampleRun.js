const { describe, it } = require("mocha");

describe("Lanch Page", () => {
  it("Verify we can launch a page", async () => {
    await browser.url("https://www.amazon.com");
    await browser.pause(2000);
  });
});
