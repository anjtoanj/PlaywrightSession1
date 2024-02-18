import {test, devices, chromium} from "@playwright/test";
test('Device Emulation at Test Case level', async()=>{

    const newDevice = devices['Galaxy S5 landscape'];
    const browser = await chromium.launch();
    const browserContext = await browser.newContext({
        ...newDevice,
        viewport: {width: 393, height: 852}
    })
    const page = await browserContext.newPage();
    await page.goto("https://www.testleaf.com/");
    await page.waitForTimeout(2000);

})