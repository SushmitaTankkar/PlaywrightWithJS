
import {test,expect} from '@playwright/test'

test('My first playwright test',async ({page})=>{

    await page.goto('https://www.google.com/');
    const title=await page.title()
    console.log(title)
    await expect (page).toHaveTitle('Google');
})


test.only('Basic UI Tests', async ({page})=>{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    console.log(await page.title())
    //console.log(title);
    await expect (page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
    const username =page.locator('#username')
    const password =page.locator('#password')
    const signin =page.locator("#signInBtn")
    await username.fill('sushtankkar')
    await password.fill('12345')
    await signin.click();
    // Pauses the test execution for exactly 3 seconds
    //await page.waitForTimeout(6000);
    await expect (page.locator("[style*='block']")).toContainText('Incorrect');
    await username.fill('rahulshettyacademy')
    await password.fill('learning')
    await signin.click();
    await expect (page.locator("[style*='block']")).toContainText('Old password "learning" is no longer valid.');
    await username.fill('rahulshettyacademy')
    await password.fill('Learning@830$3mK2')
    await signin.click();
    await page.getByText('iphone X').click();
    await page.waitForTimeout(6000);

})
    
