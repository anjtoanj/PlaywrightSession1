/**
 * Classroom
 * 
 * Create a new browser instance
 * Create a new browser context
 * Create a new page
 * Load the url 
 * https://login.salesforce.com/
 * Print the url
 * 
 */
import {test,chromium, expect} from "@playwright/test";

test(`To launch different browsers`,async () => {
    // Create a new browser instance
    const browser = await chromium.launch({headless:false, channel:'msedge'});
    // * Create a new browser context
    const browserContext = await browser.newContext();
    // * Create a new page
    const page = await browserContext.newPage();
    //
    // * Load the url 
    await page.goto("https://login.salesforce.com/")
    await page.waitForTimeout(5000);
    
    // * Print the url
    console.log(page.url);
    await page.waitForTimeout(5000);
   //Enter the username
   await page.locator("[name='username']").fill("Thanmayi321@gmail.com");
   //Enter the password
   await page.locator("[name='pw']").fill("*******");
   //Click Login button
   await page.locator("[name='Login']").click();
   //Verify the title of the page (using page.title() method)
   await page.title();
   await page.waitForTimeout(5000);
   await expect(page).toHaveTitle(/Home | Salesforce/);
})

test(`To launch multiple contexts in a browser`,async () => {
    // Create a new browser instance
    const browser = await chromium.launch({headless:false, channel:'msedge'});
    // * Create a new browser context
    const browserContext = await browser.newContext();
    // * Create a new page
    const page1 = await browserContext.newPage();
    //
    // * Load the url 
    await page1.goto("https://login.salesforce.com/")
    await page1.waitForTimeout(5000);
    
    // * Print the url
    console.log(page1.url);
    await page1.waitForTimeout(5000);
   //Enter the username
   await page1.locator("[name='username']").fill("Thanmayi321@gmail.com");
   //Enter the password
   await page1.locator("[name='pw']").fill("*******");
   //Click Login button
   await page1.locator("[name='Login']").click();
   //Verify the title of the page (using page.title() method)
 
   await page1.waitForTimeout(5000);
   await expect(page1).toHaveTitle(/Home | Salesforce/);
   console.log(`The url of the page is ${page1.url()}`);
})
