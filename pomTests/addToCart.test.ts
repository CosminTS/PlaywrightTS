import { expect, test } from "@playwright/test";
import RegisterPage from "../pages/registerPage";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import SpecialHotPage from "../pages/specialHotPage";


const email = "cosmin2@yopmail.com";
const password = "Test1234";
test.describe("Page object model tests demo", async () => {
    test("Register test 01", async ({ page, baseURL }) => {

        const registerPage = new RegisterPage(page);

        await page.goto(`${baseURL}route=account/register`);
        await registerPage.enterFirstName("Cosmin");
        await registerPage.enterLastName("Costea");
        await registerPage.enterEmail(email);
        await registerPage.enterPassword(password);
        await registerPage.enterConfirmPassword(password);
        await registerPage.enterTelephone("0734567890");
        expect(registerPage.isSubscribedChecked()).toBeChecked();

        await registerPage.checkPrivacyPolicy();
        await registerPage.clickContinue();
    });

    test("Login test 02", async ({ page, baseURL }) => {

        const loginPage = new LoginPage(page);

        await page.goto(`${baseURL}route=account/login`);
        await loginPage.login(email, password);

        expect(await page.title()).toBe("My Account");
    });

    test("Add to cart Test 03", async ({ page, baseURL }) => {
        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);
        const specialHotPage = new SpecialHotPage(page);

        await page.goto(`${baseURL}route=account/login`);
        await loginPage.login(email, password);
        await homePage.clickOnSpecialHotMenu();
        //await specialHotPage.addFirstProductToTheCart();

    });
})

