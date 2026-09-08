import {test, expect, request} from "@playwright/test"

import tokenBody from "../tests/test-data/token_request_body.json";
import putRequestBody from "../tests/test-data/put_request_body.json";


test("Put API Request to update a booking ID using playwright", async({request})=>{

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

    const putApiResponse = await request.put(`/booking/${bookingID}`,{
        headers:{
            "Content-Type": "application/json",
            "Cookie": `token=${tokenNumber}`
        },
        data: putRequestBody

    });

    console.log("======================================")
    console.log(await putApiResponse.json());

    const putAPIResponseBody = await putApiResponse.json()
    expect( putAPIResponseBody.firstname).toBe("PutRequest");
    expect( putAPIResponseBody.lastname).toBe("Selenium");


})