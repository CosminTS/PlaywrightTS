import{expect, test} from "@playwright/test";

test("Handle alert popups",async({page})=> {
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog", async(alert)=>{
        const text = alert.defaultValue();
        console.log("Alert message: "+ text);
        await alert.accept("Cosmin");

    });

    await page.locator("button:has-text('Click Me')").nth(2).click();
    expect(await page.locator("id=prompt-demo")).toContainText("Cosmin");
});

test("Handle modal popups",async({page})=> {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");
    await page.click("button[data-target='#myModal']");
    await page.click("//button[text()='Save Changes']");

});