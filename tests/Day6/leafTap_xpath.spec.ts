import { test } from "@playwright/test";


test('learn to xpath', async ({page}) => {
test.setTimeout(60000);

await page.goto('https://leaftaps.com/opentaps/control/login')

await page.waitForLoadState("domcontentloaded")

await page.locator('//input[@id="username"]').fill('democsr2') //label[@for="username"]/following-sibling::input[contains(@id,"username")]
await page.locator('//input[@id="password"]').fill('crmsfa')  //input[contains(@id,"password")]
await page.locator('//input[@value="Login"]').click() //input[contains(@id,"username")]/following::input[@value="Login"]

await page.waitForTimeout(3000)

const url = page.url();
    console.log("Page url:",url);
    await page.waitForTimeout(5000);
    const title = await page.title();
    console.log("Page title:",title);

})