import { expect, test } from "@playwright/test";
import { getAccessToken } from "./authHelper";

let accessToken : any;
let instUrl : any;
let dashBoardID : any;
let dashboardTitle : any;

test(`Use access token from the exported function - getAccessToken()`,async()=>{

        const authData = await getAccessToken();
        accessToken = authData.accessToken;
        instUrl =authData.instUrl;
        console.log(accessToken);
        console.log(instUrl);        

})

test(`TC01_Get the latest ID and Title of Dashboard created by the current user`,async({request})=>{
   
        const getField = await request.get('https://enhanceconsultancy-dev-ed.develop.my.salesforce.com/services/data/v59.0/sobjects/Dashboard',{
                headers:{
                               "Connection" : "keep-alive",
                               "Authorization" :"Bearer "+accessToken
                }
        })

        const res = await getField.json();
        console.log(res);
      //  dashBoardID = resp.recentItems[0].Id;
      //  dashboardTitle = resp.recentItems[0].Title;        

})

test.skip(`TC02_Delete the latest Dashboard created by the current user`,async({request})=>{

        if (dashboardTitle=='Salesforce Automation by Anju'){
   
                const delRecord = request.delete('https://enhanceconsultancy-dev-ed.develop.my.salesforce.com/services/data/v59.0/sobjects/Dashboard/'+dashBoardID,{
                        headers:{
                                        "Content-Type"  :  "application/json"   ,
                                        "Connection"    : "keep-alive",
                                        "Authorization" :"Bearer "+accessToken
                        }
                })
          console.log(`Status code is ${(await delRecord).status()}`);
          expect((await delRecord).status()).toEqual('204') ;   
       }  
       else {
                console.log(`Dashboard title is different: ${dashboardTitle}`);
                
       }       

})