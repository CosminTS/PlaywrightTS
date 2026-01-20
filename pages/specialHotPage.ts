import { Page } from "@playwright/test";

export default class HomePage{

    constructor(public page: Page){}

    async addFirstProductToTheCart(){
        await this.page.hover("//div[@class='image']/a",{strict:false});
        await this.page.locator("(//button[@data-original-title='Add to Cart'])[1]").click();
    }
    async isToastVisible(){
        const toast = this.page.locator("//a[@class='toast-message']");
        await toast.waitFor({state:'visible'});
        return toast;
}