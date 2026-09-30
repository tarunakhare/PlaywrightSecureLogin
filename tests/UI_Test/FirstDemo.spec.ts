import test, { expect } from "playwright/test";



test('web order login sample Test', async({page})=> {

    //Redirect URL
    await page.goto("http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx");

    await expect(page).toHaveTitle("Web Orders Login");
});

test('OrangeHRM sample Test', async({page})=> {

    //Redirect URL
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

   // await expect(page).toHaveTitle("OrangeHRM");
});