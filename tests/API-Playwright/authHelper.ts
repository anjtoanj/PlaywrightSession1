import { chromium } from "@playwright/test";

async function getAccessToken(){
    const browser  = await chromium.launch();
    const browserContext = await browser.newContext();
    const apiRequestContext =browserContext.request;
    const clientID = "3MVG95mg0lk4batgGmraH4prOsfZQ74BDVWI390E5afrB6MZN77WX_8PUj0OHRVbnB40Zh.Kj1XHbvF2vL4o.";
    const clientSecret = "2427247CB62D4341F709373985833D3704DA589099482D53AB4D3D81A1F44819";
    const username = "Thanmayi321@gmail.com";
    const password = "Playwright2024";
    const url ="https://login.salesforce.com/services/oauth2/token";

    const generatingToken = await apiRequestContext.post(url,{
        headers:{
            "Content-Type" : "application/x-www-form-urlencoded",
            "Connection" : "keep-alive"
        },
        form:{
            "grant_type":"password",
            "client_id" : clientID,
            "client_secret" : clientSecret,
            "username" : username,
            "password" : password
        }
    });
    const generatingTokenJSON = await generatingToken.json();
    console.log(generatingTokenJSON);
    return{
        accessToken: generatingTokenJSON.accessToken,
        inst_Url: generatingTokenJSON.instance_Url
    }
    
}
export {getAccessToken};
