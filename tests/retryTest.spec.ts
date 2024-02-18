import {test} from "@playwright/test";


test('test to check retry', async({page})=> {

 // 2. Login with valid credentials 
 await page.goto("https://dev189559.service-now.com");
 await page.fill('#user_name',"admin");
 await page.fill('#user_password',"AL=q+RFl6l9e");
 await page.click('#sysverb_login');
 await page.waitForLoadState('load');
 // 3. Click-All Enter Service catalog in filter navigator and press enter or Click the ServiceCatalog
 await page.locator("[aria-label='Al']").click();


})