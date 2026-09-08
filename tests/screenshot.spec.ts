import {test, expect, Browser, Page, Locator, BrowserContext} from "@playwright/test"
import{webkit, chromium, firefox} from "@playwright/test"


test('ScreenShot', async()=>{
const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
const page: Page = await browser.newPage();
await page.goto("https://www.youtube.com/");

// await page.locator(".ytSearchboxComponentInput yt-searchbox-input title").fill("Playwright");
// await page.locator(".ytSearchboxComponentSearchButton").click();


await page.waitForTimeout(5000);


//element screenshot
//await page.locator("//span[text()='AI Mode']//parent::div").screenshot({path: "elementSS.png"});

//page Screenshot
await page.screenshot({path: "pageSS.png"});

await page.screenshot({path: "fullPageSS.png", fullPage: true});
    
});