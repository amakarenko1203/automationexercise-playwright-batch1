import { Locator, Page, expect } from '@playwright/test'
import { BasePage } from './basePage';

export class TestCasesPage extends BasePage {

    constructor(page: Page) {
        super(page);
        this.testCasesTitle = this.page.locator('h2[class="title text-center"]');
    }

    private testCasesTitle: Locator;

    async isTestCaseTitleVisible() {
        await expect(this.testCasesTitle).toBeVisible();
    }
    async verifyTestCasesTitle() {
        await expect(this.testCasesTitle).toHaveText('Test Cases');
    }
}