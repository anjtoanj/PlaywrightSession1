
/**
* 1. Create a DashboardPage class with:
A Page object to interact with the browser.
A url string to store the URL of the dashboard.
2. The class should include:
A constructor that initializes the Page object and the URL.
An asynchronous navigate method to visit the url.
An async resolutionCenter(
- Enter the values for the fields email, message
- Click Send button
)
3. Test Execution:
Write an async function dashboardTest to:
Launch a browser using Playwright's chromium module (non-headless mode).
Open a new page.
Create an instance of DashboardPage, passing the new page and the URL 'https://leafground.com/' to the constructor.
Call the navigate method of the DashboardPage instance.

*/

import { chromium, Page } from "playwright";


class Dashboard{

    page:Page;
    url: string;

    //A constructor that initializes the Page object and  the URL.
    constructor(page: Page, url?: string){
    this.page = page;
    this.url = url ?? "https://leafground.com/" //Default URL


    }

    async navigate(){
    await this.page.goto(this.url);
    }

    async resolutionCentre(){
        await this.page.fill('#email',"anjtoanj@gmail.com");
        await this.page.fill('#message',"hello");
        await this.page.locator("span[text='Send']").click();

    }

}

// function outside teh class calling the class 
async function  runDashboard(){
    
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    //create an object of the class
    const ds = new Dashboard(page);
    ds.navigate();
    ds.resolutionCentre();
   
}

runDashboard();

/*3. Test Execution:
Write an async function dashboardTest to:
Launch a browser using Playwright's chromium module (non-headless mode).
Open a new page.
Create an instance of DashboardPage, passing the new page and the URL 'https://leafground.com/' to the constructor.
Call the navigate method of the DashboardPage instance. 
*/

