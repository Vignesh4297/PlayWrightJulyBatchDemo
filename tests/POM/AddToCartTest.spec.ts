

//TC_CART_001 — Add a single product to the cart and verify the cart badge shows 1.

import { test, expect } from "../Fixtures/fixtures";


test.describe("Saucedemo -Cart Page",async()=>{

    test("TC_CART_001 — Add a single product to the cart and verify the cart badge shows 1.",async({ loginPage, cartPage })=>{


        await test.step("Step 1: Login to the Sauce Demo", async()=>{

            await loginPage.goto(`${process.env.URL}` );
            await loginPage.login(`${process.env.ValidUsername}`, `${process.env.Password}`);
        })

        await test.step("Step 2: Add a product to the cart", async()=>{
             
            await cartPage.addToCartBasedonProductName();
        
        })

        await test.step("Step 3: Check the cart badge shown as 1", async()=>{
            expect(await cartPage.getCartBadgeCount()).toBe(2);
        })

        
    });

})