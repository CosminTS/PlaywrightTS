import { devices, PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices["Desktop Chrome"],
        launchOptions: {
          args: ["--start-maximized"]
          //slowMo: 1000
        }
      },

    },
    {
      name: 'firefox',
      use: { ...devices["Desktop Firefox"] },
    }
  ],
  //testMatch: ["pomTests/addToCartUsingFixture.test.ts"],
  use: {
    baseURL: "https://ecommerce-playground.lambdatest.io/index.php?",
    headless: process.env.CI ? true : false,
    viewport: null,
    screenshot: "on",
    video: "retain-on-failure"
  },
  retries: 0,
  reporter: [["dot"], ["json",
    { outputFile: "jsonReports/report.json" }],
  ["html",
    { open: "on-failure" }]],
};

export default config;