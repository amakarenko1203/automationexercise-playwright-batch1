import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './basePage';

export class BrandPage extends BasePage {
    private brandsList: Locator;
    private brandProducts: Locator;
    private brandTitle: Locator;
    private poloBrandLocator: Locator;
    private hmBrandLocator: Locator;
    
    constructor(page: Page) {
        super(page);
       
        this.brandsList = page.locator('.brands-name');
        this.brandProducts = page.locator('.features_items');
        this.brandTitle = page.locator('.title.text-center');
        this.poloBrandLocator = page.locator('a[href="/brand_products/Polo"]');
        this.hmBrandLocator = page.locator('a[href="/brand_products/H&M"]');
    }
    async verifyBrandsVisible(): Promise<void> {
    
        await expect(this.brandsList).toBeVisible();
    }
    async clickOnPoloBrand(): Promise<void> {
        await this.poloBrandLocator.click();
    }

   
    async verifyPoloBrandPage(): Promise<void> {

        await expect(this.brandTitle).toBeVisible();
        await expect(this.brandTitle).toContainText('BRAND - POLO PRODUCTS');
        await expect(this.brandProducts).toBeVisible();
    }
    async clickOnHMBrand(): Promise<void> {
        await this.hmBrandLocator.click();
    }

    async verifyHMBrandPage(): Promise<void> {
        await expect(this.brandTitle).toBeVisible();
        await expect(this.brandTitle).toContainText('BRAND - H&M PRODUCTS');
        await expect(this.brandProducts).toBeVisible();
    }
}
