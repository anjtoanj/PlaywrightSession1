import {test,expect} from "@playwright/test";
test('Test to Assert',async({page})=>{

    await page.goto("https://leafground.com/waits.xhtml");
    const cardToSelect = page.locator(".card").filter({hasText:"Wait for Visibility (1 - 10 Sec)"});
    const buttonToClick = cardToSelect.getByRole("button").filter({hasText:"Click"});
    buttonToClick.click();
    const hiddenButton = cardToSelect.getByRole("button").filter({hasText:"I am here"});
    await expect(hiddenButton).toBeVisible({timeout:10000});

})

test('Test to check alert and iframe', async ({page}) => {
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");
    const frameLocator = page.frameLocator('#iframeResult');
    const frameToSelect = frameLocator.getByRole("button").filter({hasText:"Try it"});
   //handle dialog
   page.on('dialog', async dialog=>{
       const text = dialog.message();
       console.log(`The text present in the dialog is ${text}`);
       const typeOfAlert = dialog.type();
       console.log(`Dialog type: ${typeOfAlert}`);
       await dialog.accept();    
   })  
   
})

test(`Test frame handling in w3 school`,async({page})=>{
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");
    const frameLocator1 = page.frameLocator('#iframeResult');
    frameLocator1.getByRole("button").filter({hasText:"Try it"}).click();

    page.on('dialog',async dialog=>{
        const text1 = dialog.message();
        const alertType1 = dialog.type();
        console.log(`The text message is: ${alertType1}`);
        await dialog.accept();        
    })
    
    var textToCheck = frameLocator1.locator('#demo').innerText();
    expect(textToCheck).toContainEqual("You Pressed OK!");
})

 






