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


    await page1.goto('https://www.saucedemo.com');

    await page1.locator("xpath=//input[@placeholder='Username']").fill('Problem_user');

    await page1.getByPlaceholder("Username").fill("problem_user");

    //syntax only applicable to id attribute
    await page1.locator("id=password").fill("secret_sauce");

    await page1.getByRole('button', {name: "Login"}).click();

    const altTextVisible= await page1.getByAltText("Sauce Labs Backpack").click();
    console.log(altTextVisible);


    //Absolute xpath - which we dynamically
    //syntax for xpath with attribute
    //tag[@attribute = 'value']

    //syntax for xpath based on text inside the tag
    //tag[text()='value']


    //parent tag - immediate tag for xpath
    //ancestor tag - can be multiple - we need to identify correct ancestor tag
    // - traversing to child


    //*[@id="user-name"]

    //Relative xpath -  Not advisable
    //html/body/div/div/div/div[2]/div/div/div/div[1]/div[2]/div[2]/button

    //div[text()='Sauce Labs Backpack']//ancestor::div[@class='inventory_item_description']//div[@class='pricebar']//button


   
});