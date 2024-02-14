import {test,expect } from "@playwright/test";

test('Test to create a new dashboard',async({page})=>{ 

   //1. Login to Salesforce
   await page.goto("https://login.salesforce.com/");
   await page.fill('#username',"Thanmayi321@gmail.com");
   await page.fill('#password',"Playwright2024");
   await page.click('#Login');

   //2. Access the Toggle Menu
   await page.locator("[class='slds-icon-waffle']").click();

   //3. Click View All and click Dashboards from App Launcher     
   await page.getByText('View All').click();
   await page.waitForTimeout(5000);
   await page.locator("[data-label='Dashboards']").click();
  
   //5. Create New Dashboard
   await page.locator("div[title='New Dashboard']").click();
   //6. Enter the Dashboard Name and Create
   const frame = page.frameLocator("iframe").first();
   await frame.locator("#dashboardNameInput").fill("Salesforce Automation by Anju");
   await frame.locator("button[id='submitBtn']").click();
   await page.waitForTimeout(5000);

})