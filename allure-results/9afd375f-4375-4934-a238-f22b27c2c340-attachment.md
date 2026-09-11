# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: datadriven.spec.ts >> Login Test with username: problem_user and password: undefined
- Location: tests\datadriven.spec.ts:20:9

# Error details

```
Error: page.fill: value: expected string, got undefined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [active] [ref=e11]: problem_user
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | // One scenario for login
  2  | // Wanted to check  Mulitple credentials for login
  3  | 
  4  | // 6 scenarios for login with 6 different credentials
  5  | 
  6  | //Only one test case for login and we will the same test case with multiple credentials
  7  | 
  8  | // Data Driven Testing
  9  | 
  10 | import { test, expect } from "@playwright/test";
  11 | import { getLoginData } from "../utils/ExcelFileReader";
  12 | 
  13 | const loginData = getLoginData("test-data/LoginData.xlsx", "LoginData");
  14 | 
  15 | console.log("Login Data from Excel:", loginData);
  16 | 
  17 | 
  18 | for (const data of loginData) {
  19 | 
  20 |     test(`Login Test with username: ${data.username} and password: ${data.password}`, async ({ page }) => {
  21 |     
  22 |     await page.goto("https://www.saucedemo.com/");
  23 | 
  24 |     await page.fill("#user-name", data.username);
> 25 |     await page.fill("#password", data.password);
     |                ^ Error: page.fill: value: expected string, got undefined
  26 |     
  27 |     
  28 |     });
  29 | }
```