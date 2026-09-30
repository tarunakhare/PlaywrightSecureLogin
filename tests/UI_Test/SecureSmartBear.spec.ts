
import {test, expect} from '@playwright/test';


test('Secure login test', async({page})=> {

    await page.goto('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx');
    await page.getByLabel('Username:').fill('Tester');
    await page.getByLabel('Password:').fill('test');

    await page.locator('//*[@id="ctl00_MainContent_login_button"]').click();

    test.setTimeout(60000);
    //await page.getByRole('link', { name: 'Order' }).click();
    await page.locator('//*[@id="ctl00_menu"]/li[3]/a').click();

    await page.locator('//*[@id="ctl00_MainContent_fmwOrder_ddlProduct"]').selectOption("ScreenSaver");
    await page.locator('//*[@id="ctl00_MainContent_fmwOrder"]/tbody/tr/td/ol[1]/li[2]/label').fill("2");
});