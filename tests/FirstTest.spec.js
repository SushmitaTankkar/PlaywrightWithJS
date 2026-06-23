
import {test,expect} from '@playwright/test'

test('My first playwright test',async ({page})=>{

    await page.goto('https://www.google.com/');
    const title=await page.title()
    console.log(title)
    await expect (page).toHaveTitle('Google');
})


test('Basic UI Tests', async ({page})=>{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    console.log(await page.title())
    //console.log(title);
    await expect (page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
    const username =page.locator('#username')
    const password =page.locator('#password')
    const signin =page.locator("#signInBtn")
    const user=page.getByLabel('User', { exact: true })
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
    await user.check();
    await expect(user).toBeChecked();
    await page.locator("#okayBtn").click();
    await page.locator('select.form-control').selectOption('consult');
    await page.locator('#terms').check();
    await expect(page.locator('#terms')).toBeChecked();
    await expect (page.getByRole('link', { name: 'Free Access to InterviewQues/ResumeAssistance/Material' })).toHaveAttribute('class','blinkingText');
    await signin.click();
    await page.getByText('iphone X').click();
    await page.waitForTimeout(6000);

})

test.only('Multi page automation flow',async({browser})=>{
    const context= await browser.newContext();
    const page = await context.newPage();
    const username =page.locator('#username')
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    const documentlink= await page.locator("[href*='documents-request']")
    const [page2]= await Promise.all(
        [
            context.waitForEvent('page'),
            documentlink.click(),
        ]
    )

    const text=await page2.locator('.red').textContent();
    //console.log(text);

    const arrText= text.split('@')
    //console.log(arrText);

    const domainName = arrText[1].split(" ")[0];
    //console.log(domainName);

    await username.fill(domainName);
    await page.waitForTimeout(5000);

})
    
