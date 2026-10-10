import { test } from "@playwright/test";

test("basic test", async ({page}) => {
    test.setTimeout(60000);
    await page.goto("https://www.flipkart.com/");
    
    await page.waitForLoadState("domcontentloaded");
    await page.waitForTimeout(5000);
    const url = page.url();
    console.log("Page url:",url);
    await page.waitForTimeout(5000);
    const title = await page.title();
    console.log("Page url:",title);
    
})
