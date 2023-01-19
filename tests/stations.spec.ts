import { test, expect, selectors } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/stations');

  await expect(page.locator('h1')).toContainText('Stations');
});

test('renders table with data', async ({ page }) => {
  await page.goto('http://localhost:3000/stations');

  // check that table is rendered
  await expect(page.locator('table')).toBeVisible();
  // check that last tr is visible
  await expect(page.locator('tr').nth(10)).toBeVisible();
});

test('search input is visible', async ({ page }) => {
  await page.goto('http://localhost:3000/stations');

  await expect(page.getByLabel('search')).toBeVisible();
});

test('search input filters data', async ({ page }) => {
  await page.goto('http://localhost:3000/stations');

  // change input to be 'Hanasaarenranta 1'
  await page.getByLabel('search').fill('Hanasaarenranta 1');
  // check that only 1 station is rendered
  await expect(page.locator('tbody')).toHaveCount(1);
});
