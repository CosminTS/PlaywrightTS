import { type Page } from "@playwright/test";

export default class LoginPage {

    constructor(public page: Page) {
    }

    async login(email: string, password: string) {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLoginBtn();
    }
    async enterEmail(emailAddress: string) {
        await this.page.locator("#input-email").fill(emailAddress);
    }

    async enterPassword(password: string) {
        await this.page.locator("#input-password").fill(password);
    }

    async clickLoginBtn() {
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.locator("input[value='Login']").click()
        ]);
    }
}   