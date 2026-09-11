// One scenario for login
// Wanted to check  Mulitple credentials for login

// 6 scenarios for login with 6 different credentials

//Only one test case for login and we will the same test case with multiple credentials

// Data Driven Testing

import { test, expect } from "@playwright/test";
import { getLoginData } from "../utils/ExcelFileReader";

const loginData = getLoginData("test-data/LoginData.xlsx", "LoginData");

console.log("Login Data from Excel:", loginData);


for (const data of loginData) {

    test(`Login Test with username: ${data.username} and password: ${data.password}`, async ({ page }) => {
    
    await page.goto("https://www.saucedemo.com/");

    await page.fill("#user-name", data.username);
    await page.fill("#password", data.password);
    
    
    });
}