import { test, expect } from "@playwright/test";


test("TC_PVR_001 - Book Movie Ticket in PVR Cinemas" , async ({ page }) => {
    test.setTimeout(120000);

    //1. Launch the browser and open https://www.pvrcinemas.com/
    await page.goto("https://www.pvrcinemas.com/");
    await page.waitForLoadState("domcontentloaded");    

    await expect(page).toHaveTitle(/PVR Cinemas/);

    //2. Select the city as “Chennai” 
    await expect(page.locator('(//span[text()="Delhi"])[2]')).toBeVisible();
    await page.locator('(//span[text()="Delhi"])[2]').click();
    await page.locator('//input[@placeholder="Search for city"]').fill("Chennai");
    await page.locator('//li[text()="Chennai"]').click();
 
    await page.waitForLoadState("domcontentloaded");

    // 3. Choose cinema from the available list 
    await page.locator('//span[text()="Cinema"]').click();
    await page.locator('//span[text()="Select Cinema"]').click();
    await page.locator('//span[text()="PVR Sathyam Royapettah Chennai"]').click();

    // 4. Select movie date 
    // await page.locator('//span[text()="Select Date"]').click();
    const Tomorrow = page.locator('//li[@role="option"]//span[text()="Tomorrow"]');
    await expect(Tomorrow).toBeVisible();
    Tomorrow.click();

    // 5. Choose any available movie 
    // await page.locator('//span[text()="Select Movie"]').click();
    const movie = page.locator('//li[@role="option"]//span[text()="BATHTHA"]');
    await expect(movie).toBeVisible();
    movie.click();

    // 6. Select available show time 
    const time = page.locator('//li[@role="option"]//span[text()="04:20 PM"]');
    await expect(time).toBeVisible();
    time.click();

    // 7. Click on Book button 
    await page.locator('//button[@aria-label="Submit"]').click();

    // 8. Click on Accept for Terms & Conditions 
    await page.locator('//button[text()="Accept"]').click();

    // 9. Select the available seat 
    await page.locator('//span[@id="EL.ELITE|G:5"]').click();

    // 10. Verify seat information and total ticket amount using assertions 
    const seat = page.locator('//p[text()="G5"]');

    await expect(seat).toBeVisible();
    await expect(seat).toHaveText("G5");

    console.log("Assertion passed: Seat G5 is displayed");

    // 11. Verify ticket amount
    const amount = page.locator('//h6[text()="218.02"]');

    await expect(amount).toBeVisible();
    await expect(amount).toHaveText("218.02");

    console.log("Assertion passed: Ticket amount is 218.02");

    // 12. Verify page title
    await expect(page).toHaveTitle(/PVR Cinemas/);
    console.log("Assertion passed: Page title is correct");

    // 13. Proceed to booking
    const proceedButton = page.getByRole("button", {name: "Proceed",exact: true});

    await expect(proceedButton).toBeVisible();
    await expect(proceedButton).toBeEnabled();
    await proceedButton.click();

})