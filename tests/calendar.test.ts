import{test} from '@playwright/test';
import moment from 'moment';

test("Calendar handling",async({page})=> {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");

    let date = "1994-04-02";

    await page.fill("#birthday",date);
    await page.waitForTimeout(3000);
});

test("calendar using Moment", async({page})=> {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");

    await selectDate(12, "March 2026");

    await page.reload();

    await selectDate(15, "March 2025");

    await page.reload();    

    await selectDate(10, "December 2025");

    async function selectDate(date:number, dateToSelect:string) {

        await page.click("//input[@placeholder='Start date']");

        const mmYY = page.locator("(//th[@class='datepicker-switch'])[1]");
        const nextBtn = page.locator("(//th[@class='next'])[1]");
        const prev = page.locator("(//th[@class='prev'])[1]");

        //let dateToSelect = "March 2026";

        const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore();

        while(await mmYY.textContent() != dateToSelect) {
            if(thisMonth){
                await prev.click();
            } else {
                await nextBtn.click();
            }
        }

        await page.click(`//td[@class='day' and text()='${date}']`);
        //await page.waitForTimeout(3000);
}

});
