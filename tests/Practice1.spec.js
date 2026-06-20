import {test,expect} from '@playwright/test'

test('Register and login', async({page})=>{

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
    console.log(await page.title());
    await page.locator('.btn1').click();
    await page.getByPlaceholder('First Name').fill('Sushmita');
    await page.getByPlaceholder('Last Name').fill('Dummy');
    await page.getByPlaceholder('email@example.com').fill('SushmitaDummy6@gmail.com')
    await page.getByPlaceholder('enter your number').fill('9869577936');
    //await page.locator('input[type="radio"]').click();
    await page.getByLabel('Female').check();
    await page.locator('id=userPassword').fill('Hello@1234');
    await page.getByPlaceholder('Confirm Passsword').fill('Hello@1234');
    await page.locator('input[type="checkbox"]').check();
    await page.locator('input[type="submit"]').click();
    await expect (page.locator('.headcolor')).toContainText('Account Created Successfully'),
    await page.getByText('Login').click();
    await page.locator('#userEmail').fill('SushmitaDummy6@gmail.com');  // using ID
    await page.locator('#userPassword').fill('Hello@1234');
    await page.locator('input[type="submit"]').click();
    await page.waitForTimeout(5000);
})

test.only('Login and get 1st item name',async({page})=>{

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
    await page.locator('#userEmail').fill('SushmitaDummy5@gmail.com');  // using ID
    await page.locator('#userPassword').fill('Hello@1234');
    await page.locator('input[type="submit"]').click();
    //console.log(await page.locator('.card-body b').nth(0).textContent())
    await page.locator('.card-body b').first().waitFor();
    console.log(await page.locator('.card-body b').allTextContents());

    //console.log(await page.getByText('ADIDAS ORIGINAL'));
    //console.log(await page.locator('b'));
    //await page.waitForTimeout(5000);

})