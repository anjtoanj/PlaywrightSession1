import {test, devices, chromium} from "@playwright/test";
test('Geo Location', async () => {

     const browser = await chromium.launch();
    const browserContext = await browser.newContext({
        geolocation: {
            longitude: 74.0060,
            latitude: 40.7128
        },
        permissions: ['geolocation']
    })
    const page = await browserContext.newPage();
    await page.goto("https://www.openstreetmap.org/");
    await page.locator('[aria-label="Show My Location"]').click();
    await page.waitForTimeout(2000);

})