import { expect, test } from "@playwright/test";


test('OrangeHRM login', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button', {name: 'Login'}).click();

    await expect(page.getByRole('heading', {name:'Dashboard'})).toBeVisible();

    await page.waitForTimeout(5000);

});
/*
test('After Login', async({page})=>{

    await page.getByRole('button', {name:'presentation'}).click();
});*/