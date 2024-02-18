import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://leafground.com/file.xhtml');
  await page.getByRole('link', { name: '' }).click();
  await page.getByRole('link', { name: ' Dashboard' }).click();
  await page.getByText('E-mail Address').click();
  await page.getByPlaceholder('E-mail Address').fill('anjtoanj@gmail.com');
  await page.getByPlaceholder('Write your message...').click();
  await page.getByPlaceholder('Write your message...').fill('hello');
  await page.getByRole('button', { name: 'Send' }).click();
});