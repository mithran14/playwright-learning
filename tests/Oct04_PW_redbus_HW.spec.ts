import { test } from "@playwright/test";

test("basic test", async ({page}) => {
    
    await page.goto("https://www.redbus.in/");
    await page.waitForLoadState("domcontentloaded");
    const url = page.url();
    console.log("Page url:",url);
    await page.waitForTimeout(5000);
    const title = await page.title();
    console.log("Page url:",title);

})
