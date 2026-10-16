
import { test, expect } from "@playwright/test";

test("Edit Lead", async ({ page }) => {

    test.setTimeout(60000);

    // Step 1: Login
    await page.goto("https://leaftaps.com/opentaps/control/login");

    await page.locator('//input[@id="username"]').fill("democsr2");
    await page.locator('//input[@id="password"]').fill("crmsfa");
    await page.locator('//input[@value="Login"]').click();

    // Step 2: Verify login
    console.log("Page URL:", page.url());
    console.log("Page Title:", await page.title());

    // Step 3: Navigate to Leads
    await page.locator("a>img").click();
    await page.getByText("Leads", { exact: true }).first().click();

    // Step 4: Open Create Lead page
    await page.getByText("Create Lead", { exact: true }).first().click();

    // Step 5: Enter lead details
    await page.locator('//input[@id="createLeadForm_companyName"]')
        .fill("Testleaf");

    await page.locator('//input[@id="createLeadForm_firstName"]')
        .fill("Mari");

    await page.locator('//input[@id="createLeadForm_lastName"]')
        .fill("Vignesh");

    // Step 6: Create the lead
    await page.locator('//input[@value="Create Lead"]').click();

    // Step 7: Verify lead creation
    const editButton = page.locator('//a[text()="Edit"]');
    await expect(editButton).toBeVisible();

    const companyName = page.locator(
        '//span[@id="viewLead_companyName_sp"]'
    );

    await expect(companyName).toContainText("Testleaf");

    // Step 8: Click Edit
    await editButton.click();

    // Step 9: Update company name
    const updateCompanyField = page.locator(
        '//input[@id="updateLeadForm_companyName"]'
    );

    await expect(updateCompanyField).toBeVisible();
    await updateCompanyField.fill("Qeagle");

    // Step 10: Save changes
    await page.locator('//input[@value="Update"]').click();

    // Step 11: Verify updated company name
    await expect(companyName).toContainText("Qeagle");

    console.log("Edit Lead test case completed successfully");
});
