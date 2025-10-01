import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./basePage";      
export class ProductsDetailPage extends BasePage {
   
    private productName: Locator;
    private productCategory: Locator;
    private productPrice: Locator
    private productAvailability: Locator;
    private productCondition: Locator
    private productBrand: Locator;

    constructor(page: Page) {
        super(page);
 
        this.productName = page.locator('.product-information h2');
        this.productCategory = page.locator('.product-information p:has-text("Category")');
        this.productPrice = page.locator('.product-information span span');
        this.productAvailability = page.locator('.product-information p:has-text("Availability")');
        this.productCondition = page.locator('.product-information p:has-text("Condition")');
        this.productBrand = page.locator('.product-information p:has-text("Brand")');

    }
    async isProductNameVisible(): Promise<void> {
        await expect(this.productName).toBeVisible();
    }       
    async isProductCategoryVisible(): Promise<void> {
        await expect(this.productCategory).toBeVisible();
    }   
    async isProductPriceVisible(): Promise<void> {
        await expect(this.productPrice).toBeVisible();
    }
    async isProductAvailabilityVisible(): Promise<void> {
        await expect(this.productAvailability).toBeVisible();
    }
    async isProductConditionVisible(): Promise<void> {
        await expect(this.productCondition).toBeVisible();
    }  
    async isProductBrandVisible(): Promise<void> {
        await expect(this.productBrand).toBeVisible();
    }
}
