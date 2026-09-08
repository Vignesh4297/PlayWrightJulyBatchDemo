import {test, expect, request} from "@playwright/test"

import tokenBody from "../tests/test-data/token_request_body.json";
import patchRequestBody from "../tests/test-data/patch_request_body.json";


test("Patch API Request to update a booking ID using playwright", async({request})=>{

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

    const bookingID = postAPIResponseBody.bookingid


    const tokenAPIresponse = await request.post("/auth",{
        data: tokenBody
    });


    const tokenResponseBody = await tokenAPIresponse.json()
    const tokenNumber = tokenResponseBody.token;


    // put API request

    const patchApiResponse = await request.patch(`/booking/${bookingID}`,{
        headers:{
            "Content-Type": "application/json",
            "Cookie": `token=${tokenNumber}`
        },
        data: patchRequestBody

    });

    console.log("======================================")
    console.log(await patchApiResponse.json());

    const patchAPIResponseBody = await patchApiResponse.json()
    expect( patchAPIResponseBody.firstname).toBe("Testers Talk");



})