// -----------------
//1. MergeContact (Alert and windowHandle) --DONE!
// -----------		  
// 1. Launch URL "http://leaftaps.com/opentaps/control/login"
// 2. Enter UserName and Password Using Id Locator
// 3. Click on Login Button using Class Locator
// 4. Click on CRM/SFA Link
// 5. Click on contacts Button
// 6. Click on Merge Contacts using Xpath Locator
// 7. Click on Widget of From Contact
// 8. Click on First Resulting Contact
// 9. Click on Widget of To Contact
// 10. Click on Second Resulting Contact
// 11. Click on Merge button using Xpath Locator
// 12. Accept the Alert
// 13. Verify the title of the page
import { test,chromium,expect } from "@playwright/test";
import exp from "constants";
test(`Test on MergeContact (Alert and windowHandle)`,async ({page,context})=>{
// 1. Launch URL  
await page.goto("http://leaftaps.com/opentaps/control/login");

// 2. Enter UserName and Password Using Id Locator
await page.fill('#username',"Demosalesmanager");
await page.fill('#password',"crmsfa");

// 3. Click on Login Button using Class Locator
await page.click('.decorativeSubmit');

// 4. Click on CRM/SFA Link
await page.click('.crmsfa');

// 5. Click on contacts Button
await page.click("[href='/crmsfa/control/contactsMain']");

// 6. Click on Merge Contacts using Xpath Locator
await page.click("[href='/crmsfa/control/mergeContactsForm']");

// 7. Click on Widget of From Contact
const [newWindow] = await Promise.all([
    context.waitForEvent("page"),
    page.locator("[src='/images/fieldlookup.gif']").nth(0).click()
])
//const newPage = newWindow[0];
console.log(newWindow.url());
// 8. Click on First Resulting Contact
newWindow.waitForLoadState('load');
await newWindow.locator("[class='x-grid3-cell-inner x-grid3-col-partyId']").nth(0).click();
newWindow.close();
// 9. Click on Widget of To Contact
const [newWindow1] = await Promise.all([
    context.waitForEvent("page"),
    page.locator("[src='/images/fieldlookup.gif']").nth(1).click()
])
// 10. Click on Second Resulting Contact
await newWindow1.locator("[class='x-grid3-cell-inner x-grid3-col-partyId']").nth(1).click();
newWindow1.close();
// 11. Click on Merge button using Xpath Locator
await page.locator(".buttonDangerous").click();
// 12. Accept the Alert
await page.on("dialog",async dialog =>
{
    dialog.accept();
})
// 13. Verify the title of the page
const pageTitle = await page.title();
expect (pageTitle).toContain("Merge Contacts");  

})

// 2 .ServiceNow -Ordering Mobile(Frames)
// ---------------------------

// 1. Launch ServiceNow application -https://dev217372.service-now.com
test.only(`Test on ServiceNow -Ordering Mobile(Frames)`, async ({page,context}) => {
    // 2. Login with valid credentials 
    await page.goto("https://dev189559.service-now.com");
    await page.fill('#user_name',"admin");
    await page.fill('#user_password',"AL=q+RFl6l9e");
    await page.click('#sysverb_login');
    await page.waitForLoadState('load');
    // 3. Click-All Enter Service catalog in filter navigator and press enter or Click the ServiceCatalog
    await page.locator("[aria-label='All']").click();
    await page.getByPlaceholder("Filter").fill("Service Catalog")
    await page.waitForTimeout(1000);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // 4. Click on  mobiles 
    //Step1: Interacting with the frame using frameLocator
    const frame1 = page.frameLocator("iframe").first();
    await frame1.locator("[aria-label='Mobiles. Cell phones to meet your business needs.']").click();
   
    // 5. Select Apple iphone13pro
    const frame2 = page.frameLocator("iframe").first();
    await page.waitForTimeout(2000);
    await frame2.locator("[src='233979be77d211105e3db2a07b5a990d.iix']").click();
    await page.waitForTimeout(2000);
    // 6. Choose yes option in lost or broken iPhone
    // Check the checkbox 
    //***************facing issues in servicenow appln .recheck on 10thFeb */
    await page.check('#section1 >> input[value="Yes"]');
    await page.waitForTimeout(2000);
   
    // 7. Enter phonenumber as 99 in original phonenumber field
    // 8. Select Unlimited from the dropdown in Monthly data allowance
    // 9. Update color field to SierraBlue and storage field to 512GB
    // 10. Click on Order now option
    // 11. Verify order is placed
})

 /*
  
    Homework: Window - DONE !
    Login to "https://login.salesforce.com/"
    Enter Username, Password and click Login
    ClicK 'Learn More' button under Mobile Publisher 
    Click 'Confirm' on the new window
    Verify and validate the title, url of the page
*/
test(`test on handling new window`, async({page/*fixture*/,context})=>{

    //Login to "https://login.salesforce.com/"
    await page.goto("https://login.salesforce.com/");

    //Enter Username, Password and click Login
    await page.fill('#username',"Thanmayi321@gmail.com");
    await page.fill('#password',"Playwright2024");
    await page.click('#Login');
   
    //ClicK 'Learn More' button under Mobile Publisher 
    const [newWindow2] = await Promise.all([
        context.waitForEvent("page"), //Create a promise in your code to tell that this will resolve into a new page    
        await page.locator("[title='Learn More']").click(),        

    ])
    await newWindow2.waitForLoadState('load');
     //Click 'Confirm' on the new window
    await newWindow2.locator("[onclick='goAhead()']").click();
      
    //Verify and validate the title, url of the page
    await expect(newWindow2).toHaveTitle("Create and Publish Custom-Branded Mobile Apps - Salesforce.com");
    await expect(newWindow2).toHaveURL("https://www.salesforce.com/products/platform/products/mysalesforce/");

})