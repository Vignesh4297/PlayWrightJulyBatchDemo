//Hard assertions - Fails it will test case
//Soft assertions- Fails it will not make test case, in report it show the specific test fails
import {test, expect, Browser, Page, Locator, BrowserContext} from "@playwright/test"
import{webkit, chromium, firefox} from "@playwright/test"

//skip any test - test.skip
//only one test - test.only
//tag based execution --grep 'tagname'
//repeat test run multiple times --repeat-each = n times
//retry on failure - specify number of "retries" field on playwright.config.ts

test.only("Test1 @Regression",async()=>{
    //browser launch
    //opening pages to launch web url
    //definig locator
    //click loactor
    const browser: Browser = await chromium.launch({headless: false});

    //Browser context1
    const context1: BrowserContext = await browser.newContext();
    const page1: Page = await context1.newPage();

    await page1.goto("https://www.google.com")
    console.log('Inside Test 1');
    
    expect.soft(await page1.title()).toBe("Googfle")

    console.log('After Soft Assert');
    
    expect(await page1.title()).toBe("Google")
    browser.close();

});

test("Test2 @smoke",async()=>{
    //browser launch
    //opening pages to launch web url
    //definig locator
    //click loactor
    const browser: Browser = await chromium.launch({headless: false});

    //Browser context1
    const context1: BrowserContext = await browser.newContext();
    const page1: Page = await context1.newPage();


    await page1.goto('https://www.facebook.com');
    console.log('Inside Test 2');
    browser.close();
    

});

test("Test3 @Regression",async()=>{
    //browser launch
    //opening pages to launch web url
    //definig locator
    //click loactor
    const browser: Browser = await chromium.launch({headless: false});

    //Browser context1
    const context1: BrowserContext = await browser.newContext();
    const page1: Page = await context1.newPage();

    await page1.goto("https://www.google.com")
    console.log('Inside Test 3');
    
    browser.close();

});