import { chromium, expect, test } from "@playwright/test";
import { log } from "console";


test.only('Test to create Servicenow incident', async ({request}) => {


//Without using request fixture
// const browser = await chromium.launch();
// const browserContext = await browser.newContext();
// const apiRequestContext = browserContext.request;
// const page = await browserContext.newPage();
// const apiPageRequest = page.request;

//To create a new incident
const response = await request.post("https://dev189559.service-now.com/api/now/table/incident",
{
headers:{
"Content-Type": "application/json",
"Authorization": "Basic YWRtaW46QUw9cStSRmw2bDll"
},
data:{
"short_description": "Created using Playwright"
}
});


//To get the response body
const responseBody = await response.json();
console.log(responseBody);

//To get the status code
// console.log(`The status code is ${response.status()}`);
const apiStatusCode = response.status();
expect(apiStatusCode, 'expecting api code to return 201').toBe(201);


//To get the incident number
console.log(`Incident number is ${responseBody.result.task_effective_number}`);

console.log(`Short description is ${responseBody.result.short_description}`);


const respHeaders = response.headers();
console.log(respHeaders);


})

test('Test to get the list of incidents', async ({request}) => {
        // Get the created incident
        const response =   await request.get("https://dev189559.service-now.com/api/now/table/incident",

        {
        headers:{
        "Content-Type": "application/json",
        "Authorization": "Basic YWRtaW46QUw9cStSRmw2bDll"
        },
    data:{
    "sys_id": ""
    }
    });

//To get the status code
// console.log(`The status code is ${response.status()}`);
const apiStatusCode = response.status();
expect(apiStatusCode, 'expecting api code to return 204').toBe(204);
console.log(apiStatusCode);

//To get the response body
console.log(Response.json);
})


test('Test to get the list of incidents', async ({request}) => {
/* 
* 
* Delete the incident
* 
* await request.delete("https://dev189559.service-now.com/api/now/table/incident",


{
headers:{
"Content-Type": "application/json",
"Authorization": "Basic YWRtaW46QUw9cStSRmw2bDll"
},

});
//Check the status code - 204 No Content

* 
*/
})