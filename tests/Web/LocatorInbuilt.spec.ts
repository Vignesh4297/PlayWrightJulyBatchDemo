import {test, expect, Browser, Page, Locator, BrowserContext} from "@playwright/test"
import{webkit, chromium, firefox} from "@playwright/test"


test("Locator Test",async()=>{
    //browser launch
    //opening pages to launch web url
    //definig locator
    //click loactor
    const browser: Browser = await firefox.launch({headless: false});

    //Browser context1
    const context1: BrowserContext = await browser.newContext();
    const page1: Page = await context1.newPage();

    //xpath, css selector > page.locator(xpath/css)


    await page1.goto('file:///C:/Users/Admin/Downloads/playwright-login-demo.html');

    //label tag - textinside label tag
    await page1.getByLabel("Email address").fill('demo@meridian.dev');

    //placeholder attribute
    await page1.getByPlaceholder("Enter your password").fill("Playwright@123");

    // title attribute inside the tag
    await page1.getByTitle("Show password").click();

    //it is based role of the elemtn tag
    await page1.getByRole('button', {name: 'Sign In'}).click();

    await page1.waitForTimeout(10000);

    //data-testID
    const successMessage = page1.getByTestId("success-message");
    await expect(successMessage).toContainText("Welcome back, demo!");

});