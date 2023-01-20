import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/journeys/add');
});

test('has title', async ({ page }) => {
  await expect(page.locator('h1')).toContainText('Add journeys');
});

test('input is visible', async ({ page }) => {
  await expect(page.getByLabel('upload')).toBeVisible();
});

test('Alert shows for no file selected', async ({ page }) => {
  // click Upload button without file selected
  await page.locator('Button:text("Upload")').click();

  // check if alert has popped up
  await expect(page.getByText('Please select a file')).toBeVisible();
});
