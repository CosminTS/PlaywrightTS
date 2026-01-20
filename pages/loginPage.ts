import { Page } from "@playwright/test";

export default class LoginPage{

    constructor(public page: Page){
        
    }
    async enterEmail(emailAddress: string){
        await this.page.locator("#input-email").fill(emailAddress);
    }

    async enterPassword(password: string){
        await this.page.locator("#input-password").fill(password);
    }   

    async clickLoginBtn(){
        await this.page.locator("input[value='Login']").click();
    }
}   