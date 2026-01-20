import { Page } from "@playwright/test";

export default class HomePage{

    constructor(public page: Page){

    }

    async clickOnSpecialHotMenu(){
        await this.page.locator("a:has-text('Specials')").click();
    }

}