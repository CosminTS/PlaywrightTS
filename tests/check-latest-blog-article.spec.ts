// spec: inline plan
// seed: seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Check Latest Blog Article', () => {
  test('Check Latest Blog Article', async ({ page }) => {
    // 1. Navigate to the blog page
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?');
    await page.getByRole('link', { name: 'Blog', exact: true }).click();

    // 2. Verify the latest blog article is displayed
    await expect(page.getByRole('heading', { name: 'amet volutpat consequat' }).first()).toBeVisible();
  });
});