import {expect,test} from "@playwright/test";
import { getAccessToken } from "./authHelper";
import { log } from "console";

let accessToken: any;
let instUrl: any;

test(`Use access token in the test from the export function getAccessToken`, async()=>{
     
    const authData = await getAccessToken();
    accessToken =authData.accessToken;
    instUrl = authData.inst_Url;
})

test(`TC001_Create a new Opportunity`, async({request})=>{

    const opportunity = await request.post('https://testleaf30-dev-ed.develop.my.salesforce.com/services/data/v59.0/sobjects/Opportunity',
    {
        headers:{
            "Authorization":"Bearer" +accessToken,
            "Connection":"keep-alive"
        },
        data:{
            "Name":"Created from Playwright",
            "StageName":"Qualification",
            "CloseDate":"2023-12-07"
        }
    })
    const opp_response = await opportunity.json();
    console.log(opp_response);
    console.log(`Status code is ${opportunity.status()}`);
    expect(opportunity.statusText()).toBe("Created");
    
})



