//we wanted to have common place where to initialize the browser and page object and 
// pass it to the test case, so that we can use it in the test case. 
// This is called fixtures in playwright.
import { test as base } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProductLandingPage } from '../../pages/ProductLandingPage';
import { CartPage } from '../../pages/AddToCartPage';

type PageFixtures = {
  loginPage: LoginPage;
  productLandingPage: ProductLandingPage;
    cartPage: CartPage;
};

 export const test = base.extend<PageFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    productLandingPage: async ({ page }, use) => {
        await use(new ProductLandingPage(page));
    },
    cartPage: async ({ page }, use) => { 
        await use(new CartPage(page));
    }
});


export { expect } from '@playwright/test';
export {request } from '@playwright/test';
export default test;