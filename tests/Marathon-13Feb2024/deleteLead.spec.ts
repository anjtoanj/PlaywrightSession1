import {test,expect } from "@playwright/test";
import { table } from "console";

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
   await page.waitForTimeout(2000);
   await page.locator("[data-label='Leads']").click();
   await page.waitForTimeout(2000);
   
//    5. Enter the Last Name 
//  - Action: Enter the Last name in the Search box and press Enter
   await page.type('input[name="Lead-search-input"]', "Sreekumar");
   await page.waitForTimeout(1000);
   await page.keyboard.press("Enter");
   await page.waitForTimeout(5000);
   const rows = page.locator("//table//tbody//tr");
   rows.locator("[data-refid='recordId']").nth(1).click();
   await page.waitForTimeout(10000);
   //6. Verify the lead name
   await expect(page.getByTitle('Sreekumar | Lead | Salesforce')).toBeVisible();  
   //7. Delete the Lead

   //8. Verify the deleted Lead
})

