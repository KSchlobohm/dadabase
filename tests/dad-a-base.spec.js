// @ts-check
const { test, expect } = require('@playwright/test');

const JOKES = [
  { setup: "What do you call a factory that makes okay products?", punchline: 'A satisfactory.' },
  { setup: "Why don't skeletons fight?", punchline: "They don't have the guts." },
  { setup: 'I used to hate facial hair...', punchline: 'but then it grew on me.' },
  { setup: "I'm reading a book about anti-gravity...", punchline: "It's impossible to put down." },
  { setup: 'Why did the scarecrow win an award?', punchline: 'Because he was outstanding in his field.' },
  { setup: 'I used to be a banker...', punchline: 'but I lost interest.' },
  { setup: "Why can't you give Elsa a balloon?", punchline: "Because she'll let it go." },
  { setup: "What do you call cheese that isn't yours?", punchline: 'Nacho cheese.' },
  { setup: 'Why did the bicycle fall over?', punchline: 'Because it was two-tired.' },
  { setup: 'How do you organize a space party?', punchline: 'You planet.' },
  { setup: 'What do you call a sleeping dinosaur?', punchline: 'A dino-snore.' },
  { setup: "Why don't eggs tell jokes?", punchline: "They'd crack each other up." },
  { setup: 'What do you call a fake noodle?', punchline: 'An impasta.' },
  { setup: 'Why did the math book look so sad?', punchline: 'Because it had too many problems.' },
  { setup: 'What do you call a bear with no teeth?', punchline: 'A gummy bear.' },
  { setup: "Why can't a nose be 12 inches long?", punchline: 'Because then it would be a foot.' },
  { setup: 'What did the ocean say to the beach?', punchline: 'Nothing, it just waved.' },
  { setup: 'Why did the golfer bring an extra pair of pants?', punchline: 'In case he got a hole in one.' },
  { setup: 'Did you hear about the claustrophobic astronaut?', punchline: 'He just needed a little space.' },
  { setup: 'Why do bees have sticky hair?', punchline: 'Because they use a honeycomb.' },
];

test.describe('Dad-A-Base', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('shows the page title', async ({ page }) => {
    await expect(page).toHaveTitle('Dad-A-Base');
    await expect(page.locator('h1')).toHaveText('Dad-A-Base');
  });

  test('displays the first joke setup on load', async ({ page }) => {
    await expect(page.locator('#setup-text')).toHaveText(JOKES[0].setup);
    await expect(page.locator('#punchline-text')).toBeHidden();
  });

  test('tapping the card reveals the punchline while keeping the setup visible', async ({ page }) => {
    await page.locator('#card').click();
    await expect(page.locator('#setup-text')).toHaveText(JOKES[0].setup);
    await expect(page.locator('#punchline-text')).toBeVisible();
    await expect(page.locator('#punchline-text')).toHaveText(JOKES[0].punchline);
  });

  test('tapping the card a second time hides the punchline and stays on the same joke', async ({ page }) => {
    await page.locator('#card').click(); // reveal punchline
    await page.locator('#card').click(); // hide punchline
    await expect(page.locator('#punchline-text')).toBeHidden();
    await expect(page.locator('#setup-text')).toHaveText(JOKES[0].setup);
  });

  test('Next button advances to the next joke', async ({ page }) => {
    await page.getByRole('button', { name: /next/i }).click();
    await expect(page.locator('#setup-text')).toHaveText(JOKES[1].setup);
  });

  test('Back button goes to the previous joke (wraps around)', async ({ page }) => {
    // Starting at joke 0, going back should wrap to the last joke
    await page.getByRole('button', { name: /back/i }).click();
    await expect(page.locator('#setup-text')).toHaveText(JOKES[JOKES.length - 1].setup);
  });

  test('navigating while punchline is visible resets to hidden on new joke', async ({ page }) => {
    await page.locator('#card').click(); // reveal punchline
    await expect(page.locator('#punchline-text')).toBeVisible();
    await page.getByRole('button', { name: /next/i }).click();
    await expect(page.locator('#setup-text')).toHaveText(JOKES[1].setup);
    await expect(page.locator('#punchline-text')).toBeHidden();
  });

  test('ArrowRight key advances to the next joke', async ({ page }) => {
    await page.keyboard.press('ArrowRight');
    await expect(page.locator('#setup-text')).toHaveText(JOKES[1].setup);
  });

  test('ArrowLeft key goes to the previous joke (wraps around)', async ({ page }) => {
    await page.keyboard.press('ArrowLeft');
    await expect(page.locator('#setup-text')).toHaveText(JOKES[JOKES.length - 1].setup);
  });

  test('navigation wraps forward from last joke to first', async ({ page }) => {
    // Advance through all jokes to wrap around
    for (let i = 0; i < JOKES.length; i++) {
      await page.getByRole('button', { name: /next/i }).click();
    }
    await expect(page.locator('#setup-text')).toHaveText(JOKES[0].setup);
  });

  test('Back and Next buttons are visible near the bottom of the card', async ({ page }) => {
    const backBtn = page.getByRole('button', { name: /back/i });
    const nextBtn = page.getByRole('button', { name: /next/i });
    await expect(backBtn).toBeVisible();
    await expect(nextBtn).toBeVisible();

    // Both buttons should be below the card
    const cardBox = await page.locator('#card').boundingBox();
    const backBox = await backBtn.boundingBox();
    const nextBox = await nextBtn.boundingBox();
    expect(cardBox).not.toBeNull();
    expect(backBox).not.toBeNull();
    expect(nextBox).not.toBeNull();
    expect(backBox.y).toBeGreaterThan(cardBox.y);
    expect(nextBox.y).toBeGreaterThan(cardBox.y);
  });
});
