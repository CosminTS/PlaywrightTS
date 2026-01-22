import { type Page } from "@playwright/test";

export default class RegisterPage {
    constructor(public page: Page) {
    }

    async enterFirstName(firstname: string) {
        await this.page.locator("#input-firstname").fill(firstname);
    }

    async enterLastName(lastname: string) {
        await this.page.locator("#input-lastname").fill(lastname);
    }

    async enterEmail(email: string) {
        await this.page.locator("#input-email").fill(email);
    }

    async enterTelephone(phone: string) {
        await this.page.locator("#input-telephone").fill(phone);
    }

    async enterPassword(password: string) {
        await this.page.locator("#input-password").fill(password);
    }
    async enterConfirmPassword(password: string) {
        await this.page.locator("#input-confirm").fill(password);
    }
    isSubscribedChecked() {
        return this.page.locator('#input-newsletter-no');
    }
    async checkPrivacyPolicy() {
        await this.page.locator("label[for='input-agree']").click();
    }

    async clickContinue() {
        await Promise.all([
            this.page.waitForLoadState("networkidle"),
            this.page.locator("input[value='Continue']").click()
        ])
    }
}