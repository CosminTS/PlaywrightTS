import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ["pomTests/addToCart.test.ts"],
  use: {
    baseURL: "https://ecommerce-playground.lambdatest.io/index.php?",
    headless: false,
    viewport: null,
    launchOptions: {
      args: ["--start-maximized"],
      slowMo: 1000
    },
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