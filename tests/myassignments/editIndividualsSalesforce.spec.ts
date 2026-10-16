import { test, expect } from "@playwright/test";

test("Edit Individual in Salesforce", async ({ page }) => {
    test.setTimeout(80000);

    // 1. Login to https://login.salesforce.com
    await page.goto("https://login.salesforce.com");

    await page.locator("#username").fill("marivignesh230@testleaf.com");
    await page.locator("#Login").click();
    await page.locator("#password").fill("Playwright@2026");
    await page.locator("#Login").click();

    // 2. Click on the toggle menu button from the left corner
    await page.locator(".slds-icon-waffle").click();
    // 3. Click View All and click Individuals from App Launcher
    const viewAll_Link = page.getByText("View All", { exact: true });
    await expect(viewAll_Link).toBeVisible();
    await viewAll_Link.click();
    await page.getByRole("combobox", { name: "Search apps or items" }).fill("Individuals");
    await page.getByText("Individuals", { exact: true }).click();
    // 4. Click on the Individuals tab
    await page.getByRole("button", { name: /individuals/i }).click();
    // 5. Search the Individuals last name
    await page.getByRole("combobox", { name: "Search this list..." }).fill("Vignesh");

    // 6. Click on the Dropdown icon and Select Edit
    await page.getByRole("button", { name: "Edit" }).click();
    // 7. Select Salutation as 'Mr'
    await page.getByRole("combobox", { name: "Salutation" }).click();
    await page.getByText("Mr.").click();

    // 8. Now enter the first name
    await page.getByRole("textbox", { name: "First Name" }).fill("John");
    // 9. Click on Save and Verify the first name
    await page.getByRole("button", { name: "Save" }).click();



})

    