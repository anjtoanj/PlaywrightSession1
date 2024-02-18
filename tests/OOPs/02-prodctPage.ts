import { Page } from "playwright";

class ProductPage{
    
    page:Page;
    url:string;

    //overloaded constructor with optional parameters
    constructor(page: Page, url?: string){
        this.page = page;
        this.url = url ?? "https://leafground.com/list/xhtml" // default url
        // ?? -> nullish coalescing

    }
    async navigate(){
        await this.page.goto(this.url);
     }
    // other methods to interact


}