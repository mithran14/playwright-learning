import { chromium, test } from "@playwright/test";

test("basic test", async () => {

    const browser = await chromium.launch({ headless: false });

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://www.amazon.in/");

    await page.waitForLoadState("domcontentloaded");

    // Print URL
    const url = page.url();
    console.log("Page URL:", url);
    await page.waitForTimeout(5000);
    // Print title
    const title = await page.title();
    console.log("Page Title:", title);

    await browser.close();
});