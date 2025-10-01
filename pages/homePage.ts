import {Locator,Page, expect} from '@playwright/test';
import { BasePage } from './basePage';

export class HomePage extends BasePage {
    private Logo: Locator
    private TestCasessButton: Locator
    private Footer: Locator;
    private subscriptionEmailField: Locator;
    private subscriptionButton: Locator
    private productsButton: Locator;
    private cartButton: Locator;
   
    constructor(page: Page) {
        super(page);
        this.Logo = page.getByRole('link',{name:"Website for automation"});
        this.TestCasessButton = page.getByRole('link', { name: 'Test Cases' });
        this.Footer = page.locator('footer');
        this.subscriptionEmailField = page.locator('#susbscribe_email');
        this.subscriptionButton = page.locator('#subscribe');
        this.productsButton = page.getByRole('link', { name: 'Products' });
        this.cartButton = page.getByRole('link', { name: 'Cart' });
    }

async verifyHomePage(){
    await expect(this.Logo).toBeVisible();

}
async isLogoVisible(): Promise<void> {
    await expect(this.Logo).toBeVisible();
  }
async clickTestCasesButton(): Promise<void> {
    await this.TestCasessButton.click();
  }  
async scrollToFooter(): Promise<void> {
    await this.page.locator('footer').scrollIntoViewIfNeeded();
}
async isFooterVisible(): Promise<void> {
    await expect(this.Footer).toBeVisible();
  }
async subscribeToNewsletter(email: string): Promise<void> {
    await this.subscriptionEmailField.fill(email);
    await this.subscriptionButton.click();
    await this.page.waitForTimeout(2000); // Wait for 2 seconds to ensure subscription is processed
  }

async verifySubscriptionSuccessMessage(): Promise<void> {
    // Wait for dynamic content to appear after form submission
    const successMessage = this.page.locator('#success-subscribe');
    await successMessage.waitFor({ state: 'visible', timeout: 10000 });
    await expect(successMessage).toBeVisible();
    await expect(successMessage).toContainText('You have been successfully subscribed!');
  }
async clickProductsButton(): Promise<void> {
    this.productsButton = this.page.getByRole('link', { name: 'Products' });
    await this.productsButton.click();
  }
async clickCartButton(): Promise<void> {
    this.cartButton = this.page.getByRole('link', { name: 'Cart' });
    await this.cartButton.click();
  }
}