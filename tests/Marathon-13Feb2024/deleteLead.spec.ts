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
   await page.waitForTimeout(2000);
   await page.keyboard.press("Enter");
   await page.waitForTimeout(2000);
   const rows = page.locator("//table//tbody//tr");  
   await page.waitForTimeout(2000);
   //6. Verify the lead name
   //await expect(page.getByTitle('Sreekumar | Lead | Salesforce')).toBeVisible();
   //7.Delete the lead created from the list
   rows.locator("[class='forceVirtualActionMarker forceVirtualAction']").nth(0).click();
   rows.locator("[title='Show 3 more actions']").click(); 
   await page.waitForTimeout(3000);

   // how to click delete - check with Test Leaf team tommorow
   const option = page.locator("[class='branding-actions actionMenu popupTargetContainer uiPopupTarget uiMenuList forceActionsDropDownMenuList uiMenuList--left uiMenuList--default']");
   const del = option.locator("a[title='Delete']");
   await page.waitForTimeout(2000);
   del.click();
   // rows.getByRole('menuitem').filter({hasText:"Delete"}).click();
   // for (const li of [rows.getByRole("menuitem").all])
 
//  // const options = await page.$$("//div[role='menuitem']");
//    for (let option of options)
//    {
//       const value = await option.textContent();
   
//       if(value?.includes('Delete'))
//       {
//        await page.waitForTimeout(3000);
//        await option.click();
//        break;
//       }
//    }   
  
 

   await page.waitForTimeout(3000);
   //8. Verify the deleted Lead
})

