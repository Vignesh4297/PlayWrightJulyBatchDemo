//path params - booking ID - respective response

//filter booking based on the provided parameter on the query
//Query Params ? 

import {test, expect, request} from "@playwright/test"


test("Get API Request based on booking ID in playwright", async({request})=>{

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
    //validate api response json obj
    expect( postAPIResponseBody.booking).toHaveProperty("firstname", "Playwright");
    expect( postAPIResponseBody.booking).toHaveProperty("lastname", "Automation");

    //validate nested json obj

    expect( postAPIResponseBody.booking.bookingdates).toHaveProperty("checkin", "2026-08-25");
    expect( postAPIResponseBody.booking.bookingdates).toHaveProperty("checkout", "2026-08-28");


    const getAPIResponse= await request.get(`/booking/${bookingID}`);

    console.log("=====================================")

    console.log(await getAPIResponse.json());

    expect(postAPIResponse.ok()).toBeTruthy();
    expect(postAPIResponse.status()).toBe(200);



    const queryAPIResponse= await request.get(`/booking`, {
        params:{
            firstname: 'Playwright',
            lastname: 'Automatio'
        }
    });

    console.log(await queryAPIResponse.json())



})