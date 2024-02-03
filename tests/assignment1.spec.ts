/*Test Steps:
Assignment: 1 Create Lead
1. Login to https://login.salesforce.com
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Leads tab 
5. Click on New button
6. Select Salutation dropdown
7. Enter the Last Name
8. Enter the CompanyName 
9. Click Save and Verify Leads name created
*/
import {test, chromium, expect} from "@playwright/test"
test(`Test to create a New Lead in Salesforce page`,async () => {
    
    const browser = await chromium.launch({headless:false, channel:'msedge'});
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
    await page.goto("https://login.salesforce.com/");    
    console.log(page.url);   
    await page.locator("[name='username']").fill("Thanmayi321@gmail.com");
    await page.locator("[name='pw']").fill("Playwright2024");
    await page.locator("[name='Login']").click();
    await page.waitForTimeout(10000);
    await page.locator("[class='slds-icon-waffle']").click({timeout:5000});
    await page.waitForLoadState('load');
    await page.getByText('View All').click({timeout:10000});
    await page.waitForLoadState('load');
    await page.locator('[href*="/lightning/app/06m5h000005AAoyAAG"]').click();
    await page.getByRole('button', { name: 'Leads' }).click();  
    const child1 = page.getByText('New Lead');
    page.getByRole('menuitem').filter({has: child1}).click();
    await page.waitForLoadState('load');
    await page.locator("[name='salutation']").click();
    await page.locator("[data-value='Mr.']").click();    

    //  7. Enter the Last Name
    await page.locator("[name='lastName']").fill("Sreekumar");

    //  8. Enter the CompanyName 
    await page.locator("[name='Company']").fill("TestLeaf");

    //  9. Click Save  
    await page.locator("[name='SaveEdit']").click();    

    // 10.Verify Leads name created  -- //pending to do
    expect(page.locator("[aria-label='Success']").isVisible());        
})

/*
Assignment: 2 Edit Lead
http://leaftaps.com/opentaps/control/main		

1. Launch the browser
2. Enter the username
3. Enter the password
4. Click Login
5. Click CRM/SFA link
6. Click Leads link
7. Click on Create Lead
8. Enter company name
9. Enter first name
10.Enter last name
11.Click on Create Lead button  
12.Click Edit
13.Change the company name
14.Click Update
*/

test.only(`Test to create a new Lead in leaftaps page`,async () => {

const browser = await chromium.launch({headless:false, channel:'msedge'});
const browserContext = await browser.newContext();
const page = await browserContext.newPage();  
await page.goto("http://leaftaps.com/opentaps/control/main");
await page.fill("#username", "Demosalesmanager");
await page.fill("[id='password']", "crmsfa");
await page.click(".decorativeSubmit");
  //5. Click CRM/SFA link
await page.click("text=CRM/SFA");
// 6. Click Leads link
await page.click("text=Leads");
// 7. Click on Create Lead
await page.click("text=Create Lead");
// 8. Enter company name
await page.fill("[name='companyName']", "TestLeaf");
// 9. Enter first name
await page.fill("[name='firstName']", "Anju");
// 10.Enter last name
await page.fill("[name='lastName']", "Sree");
// 11.Click on Create Lead button  
await page.click(".smallSubmit");
// 12.Click Edit
await page.locator("text=Edit").click();
// 13.Change the company name
const company = page.locator('#updateLeadForm_companyName');
company.clear();
company.fill("Comp");

// 14.Click Update
await page.click("[value='Update']");

})   
/*
Assignment: 4 Edit Individuals
Test Steps:
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher 
4. Click on the Individuals tab 
5. Search the Individuals last name
6. Click on the Dropdown icon and Select Edit
7. Select Salutation as 'Mr'
8. Now enter the first name
9. Click on Save and Verify the first name 
*/
test(`Test to update an individual's first name in Salesforce page`,async () => {
    
    const browser = await chromium.launch({headless:false, channel:'msedge'});
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
//1. Login to https://login.salesforce.com
    await page.goto("https://login.salesforce.com/");    
    console.log(page.url);
    await page.waitForTimeout(5000);
//2. Click on the toggle menu button from the left corner
    await page.locator("[name='username']").fill("Thanmayi321@gmail.com");
    await page.locator("[name='pw']").fill("Playwright2024");
    await page.locator("[name='Login']").click();
    await page.locator("[class='slds-icon-waffle']").click();
//3. Click View All and click Individuals from App Launcher     
    await page.getByText('View All').click();
    await page.waitForTimeout(5000);
// 4. Click on the Individuals tab 
  //  await page.mouse.click(61.3,19.5);
  await page.locator("[data-label=Individuals]").click();
// 5. Search the Individuals last name
    const searchIndividual = page.locator("[aria-label='Search Recently Viewed list view.']").fill("Sreekumar");
    page.keyboard.press("Enter");
// 6. Click on the Dropdown icon and Select Edit
    await page.locator("(//span[text()='Show Actions'])[1]").click();
    await page.getByRole('menuitem',{ name: 'Edit' }).click();
// 7. Select Salutation as 'Mr'
    await page.locator("div[class*='salutation']").click(); 
    await page.locator("[title='Mr.']").click(); 
// 8. Now enter the first name
    await page.locator("[placeholder='First Name']").fill("Arathy");
// 9. Click on Save and Verify the first name    
    await page.locator("[title='Save']").click();    
    const firstNameChk = page.locator("div[role='alertdialog']").innerText();
    expect(firstNameChk).toContain("Arathy");
})