import {test, expect, request} from "@playwright/test"
import{faker} from'@faker-js/faker'

import {DateTime} from 'luxon'

import requestBody from "../tests/test-data/post_request_body.json";


test("Create Post API Request Using static request body in playwright", async({request})=>{

   

    const postAPIResponse = await request.post("/booking",{       
        data:requestBody
    });

    //response
    console.log(await postAPIResponse.json());


    expect(postAPIResponse.ok()).toBeTruthy();
    expect(postAPIResponse.status()).toBe(200);

    const postAPIResponseBody = await postAPIResponse.json()
    //validate api response json obj
    expect( postAPIResponseBody.booking).toHaveProperty("firstname", "Static JSON FIle");
    expect( postAPIResponseBody.booking).toHaveProperty("lastname", "Automation");

    //validate nested json obj

    expect( postAPIResponseBody.booking.bookingdates).toHaveProperty("checkin", "2026-08-25");
    expect( postAPIResponseBody.booking.bookingdates).toHaveProperty("checkout", "2026-08-28");


})


test("Create Post API Request Using dynamic request body in playwright", async({request})=>{

    const firstname =  faker.person.firstName();
    const lastname =  faker.person.lastName();

    const checkINDate = DateTime.now().toFormat('yyyy-mm-dd');
    const checkoutDate = DateTime.now().plus({day:5 }).toFormat('yyyy-mm-dd');

    faker.phone

    console.log(firstname + lastname);



    const postAPIResponse = await request.post("/booking",{
        
        data:{
        "firstname": firstname,
        "lastname": lastname,
        "totalprice": 3000,
        "depositpaid": true,
        "bookingdates": {
            "checkin": checkINDate,
            "checkout": checkoutDate
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
    expect( postAPIResponseBody.booking).toHaveProperty("firstname", firstname);
    expect( postAPIResponseBody.booking).toHaveProperty("lastname", lastname);

    //validate nested json obj

    expect( postAPIResponseBody.booking.bookingdates).toHaveProperty("checkin", checkINDate);
    expect( postAPIResponseBody.booking.bookingdates).toHaveProperty("checkout", checkoutDate);


})