
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
    await page.locator('//*[@id="ctl00_MainContent_fmwOrder_txtUnitPrice"]').fill("98");
    await page.locator('//*[@id="ctl00_MainContent_fmwOrder_txtDiscount"]').fill("10");

    await page.locator('//*[@id="ctl00_MainContent_fmwOrder_txtName"]').fill("Tarun");
    await page.locator('//*[@id="ctl00_MainContent_fmwOrder_TextBox2"]').fill("khaugali");
    await page.locator('//*[@id="ctl00_MainContent_fmwOrder_TextBox3"]').fill("Pune");
    
    
    await page.locator('//*[@id="ctl00_MainContent_fmwOrder_TextBox4"]').fill("Maharashtr");
    await page.locator('//*[@id="ctl00_MainContent_fmwOrder_TextBox5"]').fill("411061");
    
    
    
    
});