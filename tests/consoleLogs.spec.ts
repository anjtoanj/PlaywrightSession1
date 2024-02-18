import {test} from "@playwright/test";
test('Prinitng all console messages', async({page})=>{
    page.on('console',message=> {
        console.log(`Messages >> ${message.type()} and ${message.text()}`)
    })

    await page.goto("https://www.redbus.in/");
    await page.waitForTimeout(3000);

})