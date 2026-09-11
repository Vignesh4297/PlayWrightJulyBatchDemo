import {test, expect, Browser, Page, Locator, BrowserContext} from "@playwright/test"
import{webkit, chromium, firefox} from "@playwright/test"


test("Login Test",async()=>{
    //browser launch
    //opening pages to launch web url
    //definig locator
    //click loactor
    const browser: Browser = await chromium.launch({headless: false});

    //Browser context1
    const context1: BrowserContext = await browser.newContext();
    const page1: Page = await context1.newPage();


    browser.newPage();

    //Browser context2
    const context2: BrowserContext = await browser.newContext();
    const page2: Page = await context2.newPage();

    await page1.goto('https://www.saucedemo.com');

    page1.getByPlaceholder("Username").fill("Standard_user");

    const username:Locator =page1.locator('css=#user-name');
    const password:Locator =page1.locator('#password');
    const loginButton:Locator =page1.locator('#login-button');

    await username.fill("standard_user");
    await password.fill("secret_sauce");
    await loginButton.click();

    let title = await page1.title();

    console.log("Title: "+ title);


    expect(title).toEqual('Swag Labs');

    await page2.goto('https://www.saucedemo.com');

    const username2:Locator =page2.locator('#user-name');
    const password2:Locator =page2.locator('.form_group input[type="password"]');
    const loginButton2:Locator =page2.locator('#login-button');

    await username2.fill("visual_user");
    await password2.fill("secret_sauce");

    await page1.waitForTimeout(5000)
    await loginButton2.click();





    //browser.close();
    

});