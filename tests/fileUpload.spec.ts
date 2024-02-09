import { test,chromium,expect } from "@playwright/test";
import path from "path";

test.only(`file upload- type attribute`, async({page/*fixture*/,context})=>{

 await page.goto("https://leafground.com/file.xhtml")
 const card = page.locator(".card").filter({has: page.getByText("Basic Upload")});

 await card.locator("input[type='file']").setInputFiles([path.join(__dirname,'images.jpeg')])
 //path('names/tests/image.jpeg')
     
})
