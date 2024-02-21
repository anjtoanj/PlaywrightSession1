//This is the way retry is implemented in real time projects

declare module '@playwright/test' {
    interface Page {
    delayedFill: (selector: string, value: string) => Promise<void>;
    clickAndDelay: (selector: string) => Promise<void>;
    }
    }
    
    
    export const test = baseTest.extend({
    page:async ({page}, use, testInfo) => {
    page.delayedFill =async (selector: string, value: string) => {
    
    
    // if it is going to be retried -- then add a delay
    if(testInfo.retry){
    await page.waitForTimeout(3000);
    }
    
    // call original method 
    await page.fill(selector,value);
    }
    
    
    page.clickAndDelay =async (selector: string) => {
    
    
    // call original method 
    await page.click(selector);
    
    
    // if it is going to be retried -- then add a delay
    if(testInfo.retry){
    await page.waitForTimeout(3000);
    }
    }
    await use(page);
    }
    })
    
    
    
    
    
    