import {expect, test} from '@playwright/test';

test("Interact with  frames", async ({page}) => {

    await page.goto("https://letcode.in/frame");
    const allframes = page.frames();;
    console.log("Number of frames: " + allframes.length);

    const frame =  page.frameLocator("#firstFr");
    await frame.locator("input[name='fname']").fill("Cosmin");
    await frame.locator("input[name='lname']").fill("Test");

    const innerFrame = frame.frameLocator("iframe[src='innerframe']")
    await innerFrame.locator("input[name='email']").fill("test@test.com")

    // const myFrame  = page.frame("firstFr");
    // // the ? operator is used to avoid null pointer exception (if frame is not found)
    // await myFrame?.fill("input[name='fname']", "Cosmin");
    // await myFrame?.fill("input[name='lname']", "Test");

    // expect(await myFrame?.locator("p.has-text-info").textContent()).toContain("You have entered");

    await page.waitForTimeout(3000);
});