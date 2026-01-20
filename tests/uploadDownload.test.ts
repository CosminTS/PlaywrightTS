import{test} from '@playwright/test';

test("Download file test", async({page})=> {

    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");

    const textToBeDownloaded = "This is the text that will be downloaded from the file.";

    await page.type("#textbox", textToBeDownloaded);
    await page.click("#create");
    const download = await Promise.all([
        page.waitForEvent("download"),
        page.click("id=link-to-download")
    ])

    const filename = download[0].suggestedFilename();
    await download[0].saveAs(filename);

    // const path = await download[0].path();
    // console.log("Downloaded file path: "+path);

})

test.only("Upload file test", async({page})=> {
    await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
    await page.setInputFiles('input[type="file"]', ['uploadItems/1.jpeg', 'uploadItems/2.jpeg']);
    // const [uploadFiles] = await Promise.all([
    //     page.waitForEvent("filechooser"),
    //     page.click('input[type="file"]')
    // ]);

    // const isMultiple = uploadFiles.isMultiple();
    // console.log("Is multiple files allowed: "+isMultiple);
    // uploadFiles.setFiles(['uploadItems/1.jpeg', 'uploadItems/2.jpeg']);


    await page.waitForTimeout(3000);
});
