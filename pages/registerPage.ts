import { Page } from "@playwright/test";

export default class RegisterPage{
    constructor(public page: Page){
        
    }
    async enterFirstName(firstname: string){
        await this.page.locator("#input-firstname").fill(firstname);
    }

    async enterLastName(lastname: string){
        await this.page.locator("#input-lasttname").fill(lastname);
    }

    async enterEmail(email: string){
        await this.page.locator("#input-email").fill(email);
    }

    async enterTelephone(phone: string){
        await this.page.locator("#input-telephone").fill(phone);
    }
    
    async enterPassword(password: string){  
        await this.page.locator("#input-password").fill(password);
    }
    async enterConfirmPassword(password: string){
        await this.page.locator("#input-confirm").fill(password);
    }
    isSubscribedChecked(){
        return  this.page.locator('#input-newsletter-no').isChecked();
    }
    async checkPrivacyPolicy(){
        await this.page.locator("input[name='agree']").click();
    }

    async clickContinue(){
        await this.page.locator("input[value='Continue']").click();
    }
}