import{test,expect} from"@playwright/test";

test('test', async ({page}) => {
  
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('test@test.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('12345y6');
  await page.getByRole('textbox', { name: 'Password' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');
  await page.getByRole('button', { name: 'Login' }).click();

});