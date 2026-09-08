

import {test, expect, Browser, Page, Locator, BrowserContext} from "@playwright/test"
import{webkit, chromium, firefox} from "@playwright/test"

//common configuration for timeout applicable to all test inside the spec
test.use({ actionTimeout:10000});

test('Select based Drop Down test', async()=>{
const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
const page: Page = await browser.newPage();
await page.goto("https://www.magupdate.co.uk/magazine-subscription/phrr");

const countryDropdown = 'select#Contact_CountryCode';

await page.waitForTimeout(3000);

await page.selectOption(countryDropdown, {value: 'AS'});

await page.waitForTimeout(2000);
await page.selectOption(countryDropdown, {label: 'Antarctica'});

await page.waitForTimeout(2000);

await page.selectOption(countryDropdown, {index: 15});



});


test('mouse actions', async()=>{

    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});

    const context: BrowserContext = await browser.newContext()
    const page: Page = await context.newPage();

    await page.goto("https://www.bigbasket.com/?nc=logo")


await page.waitForTimeout(2000);

    await page.locator("(//span[text()='Category'])[2]").click();

    await page.waitForTimeout(3000);



    // await page.goto("https://demo.guru99.com/test/simple_context_menu.html");

    // await page.getByText("Double-Click Me To See Alert").dblclick();
    // await page.waitForTimeout(2000);
    // await page.getByText("right click me").click({button: 'right'});
    // await page.waitForTimeout(2000);

    //mouse-hover

    // await page.goto("https://www.spicejet.com/");
    // await page.waitForTimeout(15000);

    // await page.getByText("Add-ons").first().hover();
    // await page.getByText("Visa Services").first().click();
    // await page.waitForTimeout(15000);

    //shift+ click / ctrl+click 

    await page.goto("https://the-internet.herokuapp.com/shifting_content");
    await page.getByText("Example 1: Menu Element").click({modifiers: ["Control"]});

    await page.waitForTimeout(15000);

    



});


test("drag and drop", async()=>{


    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});

    const context: BrowserContext = await browser.newContext()
    const page: Page = await context.newPage();

    await page.goto("https://jqueryui.com/resources/demos/droppable/default.html")

    await page.waitForTimeout(2000)

    //await page.locator("#draggable").dragTo(page.locator("#droppable"));

    await page.locator("#draggable").hover();
    await page.mouse.down();
    await page.locator("#droppable").hover();
    await page.mouse.up();



    await page.waitForTimeout(2000)



});

test("File Upload", async()=>{
    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});

    const context: BrowserContext = await browser.newContext()
    const page: Page = await context.newPage();

    // await page.goto("https://cgi-lib.berkeley.edu/ex/fup.html")

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

    await page.waitForTimeout(2000)

    page.locator("//input[@name='filesToUpload']").setInputFiles(["C:\\Users\\Admin\\Documents\\Upload\\sampleImage.jpeg","C:\\Users\\Admin\\Documents\\Upload\\playwright-login-demo.html","C:\\Users\\Admin\\Documents\\Upload\\Playwright.pdf"]);


    await page.waitForTimeout(2000);
    console.log("Deleting uploaded files")
    page.locator("//input[@name='filesToUpload']").setInputFiles([]);
    await page.waitForTimeout(15000);


});

test('Fill character by character', async()=>{
    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});

    const context: BrowserContext = await browser.newContext()
    const page: Page = await context.newPage();
    // await page.goto("https://demoqa.com/automation-practice-form")

    // await page.locator("#lastName").focus();

    // await page.waitForTimeout(5000);

    // await page.locator("#firstName").pressSequentially("ISHATraining", {delay: 1000});


    page.goto('https://demoqa.com/modal-dialogs')


    await page.locator("#showSmallModal").click();

    await page.on("dialog", async dialog => {

    console.log(dialog.message());


    await dialog.accept();

});


})


test("Auto Waiting concepts",async()=>{


    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});

    const context: BrowserContext = await browser.newContext()
    const page: Page = await context.newPage();


    //default timeout = 30 secs
    //below chnaging to 10 secs

    //page.setDefaultTimeout(10000);

    await page.goto("https://demoqa.com/automation-practice-form")

    await page.locator('ashfajkdsfksfkj').click({timeout: 1000});


})


test("Iframes navigaton", async()=>{
    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});

    const context: BrowserContext = await browser.newContext()
    const page: Page = await context.newPage();

    await page.goto("https://demoqa.com/nestedframes")

    const outerFrame = page.frameLocator('#frame1');
    const innerFrame =outerFrame.frameLocator("iframe");

    console.log("Visible" + await innerFrame.getByText("Child Iframe").isVisible());

})


test("Model Dialogs", async()=>{

    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});

    const context: BrowserContext = await browser.newContext()
    const page: Page = await context.newPage();

    await page.goto("https://demoqa.com/alerts");

    await page.locator("#promtButton").click();





    page.on("dialog", async (dialog) => {

        console.log(dialog.message());
    })

});



