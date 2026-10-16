import { test } from "@playwright/test";


test('learn to handle select dropdowns', async ({page}) => {
test.setTimeout(60000);

await page.goto('https://leaftaps.com/opentaps/control/login')

await page.waitForLoadState("domcontentloaded")

await page.locator('#username').fill('democsr2')
await page.locator('#password').fill('crmsfa')
await page.locator('.decorativeSubmit').click()

await page.waitForTimeout(5000)

await page.locator('a>img').click()
await page.waitForTimeout(5000)
await page.locator("text=Leads").first().click()
await page.waitForTimeout(4000)
await page.locator("text=Create Lead").nth(0).first().click();
await page.waitForTimeout(3000)



//await page.locator('[name="industryEnumId"]').selectOption({value:"Playwright"})

let AllDropdown = page.locator('[name="industryEnumId"]>option')
//let AllDropdown=["select","PW"]
//count of dropdown values

let ddcount=await AllDropdown.count()
console.log(ddcount)//5

//use for loop to iterate it

for (let index = 0; index<ddcount; index++) {

    let values=await AllDropdown.nth(index).innerText()
    console.log(values);
    
}

await page.locator('[name="industryEnumId"]').selectOption({label:"Insurance"})
await page.waitForTimeout(5000)

//await page.waitForLoadState("domcontentloaded")

    
})