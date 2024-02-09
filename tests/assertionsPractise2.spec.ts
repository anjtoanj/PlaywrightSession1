
// Assertions:
//Assignment:1
import {test,expect } from "@playwright/test";
test('Test to assert page title',async({page})=>{

        // https://www.leafground.com/button.xhtml
        page.goto("https://www.leafground.com/button.xhtml");
        // - Click on the button with the text ‘Click and Confirm title.’
        page.getByRole("button").filter({hasText:"Click"}).click();
        // - Verify that the title of the page is ‘dashboard.’
        await expect(page).toHaveTitle("Dashboard");

})

test.only('Test to assert disabled button',async({page})=>{

    // https://www.leafground.com/button.xhtml
    page.goto("https://www.leafground.com/button.xhtml");

    // - Check if the button with the text ‘Confirm if the button is disabled’ is disabled.
    //  ***************** how to do this ? how to locate ?******************

    expect(page.getByRole("button").filter({hasText:"Disabled"})).toBeDisabled();

})



//Assignment:2   ///////////// *********** the steps are not clear for me . get clarified from Testleaf team*********
test('Test to assert assignment2',async({page})=>{

    // https://www.leafground.com/button.xhtml
    page.goto("https://www.leafground.com/button.xhtml");
// - Click on the "Basic Checkbox.”  

// - Click on the "Notification Checkbox."
// - Verify that the expected message is displayed.
// - Click on your favorite language (assuming it's related to checkboxes).
// - Click on the "Tri-State Checkbox."
// - Verify which tri-state option has been chosen.
// - Click on the "Toggle Switch."
// - Verify that the expected message is displayed.
// - Verify if the Checkbox is disabled.
// - Select multiple options on the page (details may be needed).
// - Perform any additional actions or verifications required.
// - Close the web browser when done.
})

