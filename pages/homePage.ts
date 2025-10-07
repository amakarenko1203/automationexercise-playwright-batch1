import {Locator,Page, expect} from '@playwright/test';
import { BasePage } from './basePage';

export class HomePage extends BasePage {
    private Logo: Locator
    private TestCasessButton: Locator
    private Footer: Locator;
    private subscriptionButton: Locator
    private productsButton: Locator;
    private cartButton: Locator;
    private categoriesSection: Locator;
    private womenCategory: Locator;
    private menCategory: Locator;
    

    constructor(page: Page) {
        super(page);
        this.Logo = page.getByRole('link',{name:"Website for automation"});
        this.TestCasessButton = page.getByRole('link', { name: 'Test Cases' });
        this.Footer = page.locator('footer');
        this.subscriptionButton = page.locator('#subscribe');
        this.productsButton = page.getByRole('link', { name: 'Products' });
        this.cartButton = page.getByRole('link', { name: 'Cart' });
        this.categoriesSection = page.locator('.left-sidebar');
        this.womenCategory = page.locator('a[href="#Women"]');
        this.menCategory = page.locator('a[href="#Men"]');
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
    await super.subscribeAndValidateSubscription(email);
    await this.page.waitForTimeout(2000); 
  }

async verifySubscriptionSuccessMessage(): Promise<void> {
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

  
  async verifyCategoriesSectionVisible(): Promise<void> {
    await expect(this.categoriesSection).toBeVisible();
  }

  async verifyCategoriesPanelVisible(): Promise<void> {
    await expect(this.page.locator('.panel-group')).toBeVisible();
  }

  async clickWomenCategory(): Promise<void> {
    await this.womenCategory.click();
  }

  async clickWomenSubCategory(subCategory: string): Promise<void> {
  
    await this.page.locator(`a[href="/category_products/1"]`).click(); 
  }

  async clickMenCategory(): Promise<void> {
    await this.menCategory.click();
  }

  async clickMenSubCategory(subCategory: string): Promise<void> {
    await this.page.locator(`a[href="/category_products/3"]`).click(); 
  }
  async clickViewProductForFirstProduct() {
        await this.page.click('css=[data-test="product-list"] .product-item:first-child .view-product-btn');
    }
    async clickViewProductForFirstProduct(): Promise<void> {
        const firstProduct = this.page.locator('.features_items .product-image-wrapper').first();
        await firstProduct.locator('a[href*="/product_details/"]').click();
    }
}