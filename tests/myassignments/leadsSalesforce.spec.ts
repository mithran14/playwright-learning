import { test, expect } from "@playwright/test";


test("Create Lead in Salesforce", async ({ page }) => {
    test.setTimeout(80000);

    // 1. Login to https://login.salesforce.com
    await page.goto("https://login.salesforce.com");
    await page.waitForLoadState("domcontentloaded")

    await page.locator("#username").fill("marivignesh230@testleaf.com");
    await page.locator("#Login").click();
    await page.locator("#password").fill("Playwright@2026");
    await page.locator("#Login").click();

    await page.waitForLoadState("domcontentloaded");

    // 2. Click on toggle menu button from the left corner
    await page.getByRole("button", { name: /app launcher/i }).click();

    // 3. Click view All and click Sales from App Launcher
    const viewAll_Link = page.getByText("View All", { exact: true });
    await expect(viewAll_Link).toBeVisible();
    await viewAll_Link.click();

    await page.getByRole("combobox", { name: "Search apps or items" }).fill("Leads");
    
    // 4. Click on Leads tab
    await page.getByText("Leads", { exact: true }).click();

    // 5. Click on New button
    await page.getByRole("button", { name: /new/i }).click();

    // 6. Select Salutation dropdown
    await page.getByRole("combobox", { name: "Salutation" }).click();
    await page.getByText("Mr.", { exact: true }).click();

    // 7. Enter the Last Name
    await page.getByLabel("Last Name").fill("Vignesh");

    // 8. Enter the Company Name
    await page.getByLabel("Company").fill("TestLeaf");

    // 9. Click Save and Verify Leads name created
    await page.getByRole("button", { name: "Save", exact: true }).click();

})


