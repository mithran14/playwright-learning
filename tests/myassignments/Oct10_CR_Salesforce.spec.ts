import { test } from "@playwright/test";

test('login salesforce', async ({page}) => {
    
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.waitForLoadState("domcontentloaded")
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('#Login').click()
    await page.waitForTimeout(2000)
    await page.locator('#password').fill('TestLeaf@2025')
    await page.locator('#Login').click()

    let pageUrl = page.url()
    console.log("URL: ",pageUrl);

    let pageTitle = await page.title()
    console.log("Title: ",pageTitle);
})