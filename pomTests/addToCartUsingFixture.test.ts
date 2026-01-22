import { expect, test } from "../base/pomFixture";
import data from "../test-data/addToCart-test-data.json" assert { type: "json" };

test.describe("Page object model tests demo", async () => {
    test("Register test 01", async ({ page, baseURL, registerPage }) => {

        //const registerPage = new RegisterPage(page);

        await page.goto(`${baseURL}route=account/register`);
        await registerPage.enterFirstName(data.firstname);
        await registerPage.enterLastName(data.lastname);
        await registerPage.enterEmail(data.email);
        await registerPage.enterPassword(data.password);
        await registerPage.enterConfirmPassword(data.password);
        await registerPage.enterTelephone(data.phone);
        expect(registerPage.isSubscribedChecked()).toBeChecked();

        await registerPage.checkPrivacyPolicy();
        await registerPage.clickContinue();
    });

    test("Login test 02", async ({ page, baseURL, loginPage }) => {

        //const loginPage = new LoginPage(page);

        await page.goto(`${baseURL}route=account/login`);
        await loginPage.login(data.email, data.password);

        expect(await page.title()).toBe("My Account");
    });

    test("Add to cart Test 03", async ({ page, baseURL, loginPage, homePage, specialHotPage }) => {
        // const loginPage = new LoginPage(page);
        // const homePage = new HomePage(page);
        // const specialHotPage = new SpecialHotPage(page);

        await page.goto(`${baseURL}route=account/login`);
        console.log(data);
        await loginPage.login(data.email, data.password);
        await homePage.clickOnSpecialHotMenu();
        //await specialHotPage.addFirstProductToTheCart();

    });
})

