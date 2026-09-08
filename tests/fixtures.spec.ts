import {test, expect, Browser, Page , Locator, BrowserContext} from "@playwright/test"
import{webkit, chromium, firefox} from "@playwright/test"


test("Login Test",async({page})=>{
 
    await page.goto('https://www.saucedemo.com');

    const username2:Locator =page.locator('#user-name');
    const password2:Locator =page.locator('.form_group input[type="password"]');
    const loginButton2:Locator =page.locator('#login-button');

    await username2.fill("visual_user");
    await password2.fill("secret_sauce");

    await page.waitForTimeout(5000)
    await loginButton2.click();





    //browser.close();
    

});