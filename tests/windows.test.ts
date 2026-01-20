import{expect,Page,test} from "@playwright/test";

test("Windows handling",async({page})=> {

    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");

    console.log(page.url());

    const [multiPage] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("#followboth")
    ]);
    await multiPage.waitForLoadState();

    const pages = multiPage.context().pages();
    console.log("Number of pages: " + pages.length);

    pages.forEach( tab => {
        console.log("Page url: " + tab.url());
    })
    
    let facebookPage: Page| undefined;
    for(const page of pages) {
        const url = page.url();
        if(url == "https://www.facebook.com/lambdatest") {
            facebookPage = page;
        }
    }

    if (!facebookPage) {
    throw new Error("Facebook page not found");
    
    }       
    
    const text = await facebookPage.textContent("//h1");
    console.log("Facebook page h1 text: " + text);

    // const [newWindow] = await Promise.all([
    //     page.waitForEvent("popup"),
    //     page.click("'Follow On Twitter'")
    // ])

    // console.log("New window url: " + newWindow.url());
    // //newWindow.fill;
     
});
