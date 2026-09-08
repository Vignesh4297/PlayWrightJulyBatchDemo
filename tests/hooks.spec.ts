import {test, expect, Browser, Page, Locator, BrowserContext} from "@playwright/test"
import{webkit, chromium, firefox} from "@playwright/test"


//Hooks - TO do Prerequesite
//beforeAll - before all the test gets executed
//beforeeac - runs before each test
//after each- runs after each test
//AfterAll - After all the test executed




test.beforeAll("Before Each", async()=>{

    console.log("Before all");
})
test.beforeEach("Before Each", async()=>{

    console.log("Before Each");
})
test.afterAll("Before Each", async()=>{

    console.log("After All");
})
test.afterEach("Before Each", async()=>{

    console.log("After Each");
})


test(" Test1",async()=>{
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
    
    browser.close();

});

test(" Test2",async()=>{
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

test.skip(" Test3 @Sanity",async()=>{
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
    
    browser.close();

});

test(" Test4",async()=>{
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