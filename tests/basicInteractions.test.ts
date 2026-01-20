import {expect, test} from "@playwright/test";

test("Interact with inputs",async({page})=> {

    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messageInput = page.locator("input#user-message");
    await messageInput.scrollIntoViewIfNeeded();
    console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder","Please enter your Message");
    console.log(await messageInput.inputValue());
    
    await messageInput.type("Hi Cosmin");
})

test("Sum two numbers",async({page})=> {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const firstInput = page.locator("#sum1");
    const secondInput = page.locator("#sum2");

    const getSumBtn  = page.locator("//button[text()='Get Sum']");
    let num1 = "121";
    let num2 = "79";
    await firstInput.fill(""+num1);
    await secondInput.type(""+num2);
    await getSumBtn.click();

    const result = page.locator("#addmessage");
    expect(result).toHaveText(""+(parseInt(num1)+parseInt(num2)));
})

test("Find the checkbboxes",async({page})=> {
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    const singleCheckbox = page.locator("(//div[@class='mt-40']//input)[1]");
    expect(singleCheckbox).not.toBeChecked();
    await singleCheckbox.check();
    expect(singleCheckbox).toBeChecked();
})


