import { test, expect} from "@playwright/test";
test("learn assertion" , async({page}) => {
    
    await page.goto('https://leafground.com/input.xhtml')
    await page.waitForLoadState("domcontentloaded")

    const url = page.url();
    console.log("Page url:",url);
    await expect.soft(page).toHaveURL('https://leafground.com/input.xhtml')
    console.log("For URL assertion validated");

    const title = await page.title();
    console.log("Page title:",title);
    await expect.soft(page).toHaveTitle('Input Components')
    console.log("For Title, Soft assertion validated");

    let disabledBox =page.locator('//h5[contains(normalize-space(.),"Verify if text box is disabled")]/following::input[1]')
    await expect(disabledBox).toBeDisabled()
    console.log("Disabled box validated");

    let name =page.locator('//input[@placeholder="Babu Manickam"]')
    await expect(name).toBeEditable()
    console.log("Editable box validated");
    await name.fill("Mari Vignesh");
    console.log("Filled with value");

    let country =page.locator('//h5[contains(normalize-space(.),"Append Country to this City.")]/following::input[1]')
    await expect(name).toBeEditable()
    console.log("country Editable box validated");
    await country.clear()
    await country.fill("Kerala");
    console.log("calear and Filled with value");
    await expect(country).toBeVisible()
})