import { HomePage } from "./homePage";
import { expect, Page } from "@playwright/test";

export class SubscriptionPage extends HomePage {
    private successMessage: any;

    constructor(page: Page) {
        super(page);
        this.successMessage = this.page.locator('text=You have been successfully subscribed!');
    }

    async subscribe(email: string): Promise<void> {
        // Use the parent class method to avoid recursion
        await super.subscribeToNewsletter(email);
    }

    async verifySubscriptionSuccessMessage(): Promise<void> {
        await expect(this.successMessage).toBeVisible({ timeout: 10000 });
    }
}