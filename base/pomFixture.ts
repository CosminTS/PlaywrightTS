import { test as baseTest, chromium } from "@playwright/test";
import RegisterPage from "../pages/registerPage";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import SpecialHotPage from "../pages/specialHotPage";


type pages = {
    registerPage: RegisterPage;
    loginPage: LoginPage;
    homePage: HomePage;
    specialHotPage: SpecialHotPage;
};

const capabilities = {
    browserName: "Chrome", // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    browserVersion: "latest",
    "LT:Options": {
        platform: "Windows 10",
        build: "Playwright Test latest pomFixture",
        name: "Playwright Test",
        user: "nimsoc89",
        accessKey: "LT_Gg4Ojh04jd2JEfEbmBFqwY1Z0YQUf8lHzNZyfwrdFjCdMox",
        network: true,
        video: true,
        console: true,
        tunnel: false, // Add tunnel configuration if testing locally hosted webpage
        tunnelName: "", // Optional
        geoLocation: '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
    },
};

const testPages = baseTest.extend<pages>({
    page: async ({ }, use) => {
        const browser = await chromium.connect(`wss://cdp.lambdatest.com/playwright?capabilities=
                ${encodeURIComponent(JSON.stringify(capabilities))}`);

        const context = await browser.newContext();
        const ltPage = await context.newPage();
        await use(ltPage);;
        await ltPage.close();
    },
    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    specialHotPage: async ({ page }, use) => {
        await use(new SpecialHotPage(page));
    }
});

export const test = testPages;
export const expect = testPages.expect;