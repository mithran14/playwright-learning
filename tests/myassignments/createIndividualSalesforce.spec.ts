
import { test, expect } from "@playwright/test";

test("Create Individual in Salesforce", async ({ page }) => {
    test.setTimeout(60000);

    // 1. Login to Salesforce
    await page.goto("https://login.salesforce.com");

    await page.locator("#username").fill("marivignesh230@testleaf.com");
    await page.locator("#Login").click();
    await page.locator("#password").fill("Playwright@2026");
    await page.locator("#Login").click();

    page.waitForTimeout(4000)

    // Login verification
    await expect(page).not.toHaveURL("https://login.salesforce.com/");

    await page.waitForLoadState("domcontentloaded")

    // 2. Click App Launcher (toggle menu)
    await page.getByRole("button", { name: /app launcher/i }).click();

    // 3. Click View All and select Individuals
    const viewAll_Link = page.getByText("View All", { exact: true })
    await expect(viewAll_Link).toBeVisible();
    await viewAll_Link.click();

    await page.getByRole("combobox",{name:"Search apps or items"}).fill("Individuals");


    await page.getByText("Individuals", { exact: true }).click();

    // 4. Click dropdown icon in the Individuals tab
    await page.getByRole("button", { name: /individuals/i }).click();

    // 5. Click New Individual
    await page.getByRole("button", { name: /new/i }).click();

    // 6. Enter Last Name
    await page.getByLabel("Last Name").fill("Vignesh");

    // 7. Save and verify
    await page.getByRole("button", { name: "Save", exact: true }).click();

    await expect(page.getByText("Vignesh", { exact: true }).first()).toBeVisible();

    console.log("Individual created successfully");
});
