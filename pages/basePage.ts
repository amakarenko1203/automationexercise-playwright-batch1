import { Locator, Page, expect } from "@playwright/test";

export class BasePage {
    page: Page;
    private topNavigationLocators: Locator;
    private subscriptionTitle: Locator;
    private subscriptionEmailField: Locator;
    private arrowButton: Locator;
    private successMessage: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.topNavigationLocators = page.locator('ul[class="navbar-nav"]');
        this.subscriptionTitle = page.getByRole('heading', { name: 'Subscription' })
        this.subscriptionEmailField = page.locator('#susbscribe_email');
        this.arrowButton = page.locator('#subscribe');
        this.successMessage = page.locator('div[class="alert-success alert"]');
    }

    async clickOnNavLink(linkText: string): Promise<void> {
        await this.topNavigationLocators.getByText(linkText).click();
    }
    async isSubscriptionTitleVisible(): Promise<void> {
        await this.subscriptionTitle.scrollIntoViewIfNeeded();
        await expect(this.subscriptionTitle).toHaveText('SUBSCRIPTION');
    }
    async subscribeAndValidateSubscription(email: string): Promise<void> {
        await this.subscriptionEmailField.fill(email);
        await this.arrowButton.click();
        await expect(this.successMessage).toBeVisible();
    }
}