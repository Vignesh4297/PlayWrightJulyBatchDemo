import {test, expect, request} from "@playwright/test"


test("Create Post API Request Using static request body in playwright", async({request})=>{

    const postAPIResponse = await request.post("/booking",{
        
        data:{
        "firstname": "Playwright",
        "lastname": "Automation",
        "totalprice": 3000,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2026-08-25",
            "checkout": "2026-08-28"
        },
        "additionalneeds": "Dinner Required"
}

    });

    //response
    console.log(await postAPIResponse.json());


    expect(postAPIResponse.ok()).toBeTruthy();
    expect(postAPIResponse.status()).toBe(200);

    const postAPIResponseBody = await postAPIResponse.json()
    //validate api response json obj
    expect( postAPIResponseBody.booking).toHaveProperty("firstname", "Playwright");
    expect( postAPIResponseBody.booking).toHaveProperty("lastname", "Automation");

    //validate nested json obj

    expect( postAPIResponseBody.booking.bookingdates).toHaveProperty("checkin", "2026-08-25");
    expect( postAPIResponseBody.booking.bookingdates).toHaveProperty("checkout", "2026-08-28");


})