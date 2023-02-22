import { test, expect, selectors } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/journeys');
});

test('has title', async ({ page }) => {
  await expect(page.locator('h1')).toContainText('Journeys');
});

test('renders table with data', async ({ page }) => {
  // check that table is rendered
  await expect(page.locator('table')).toBeVisible();
  // check that last tr is visible
  await expect(page.locator('tr').nth(10)).toBeVisible();
});

test('pagination next and prev buttons work', async ({ page }) => {
  // Click next button
  await page.locator('Button:text("Next")').click();

  // check that second span has text 11 and third span has text 20
  await expect(page.locator(':nth-match(span, 3)')).toHaveText("11");
  await expect(page.locator(':nth-match(span, 4)')).toHaveText("20");

  // Click prev button
  await page.locator('Button:text("Prev")').click();

  // check that spans have gone back to 1 to 10
  await expect(page.locator(':nth-match(span, 3)')).toHaveText("1");
  await expect(page.locator(':nth-match(span, 4)')).toHaveText("10");
})
