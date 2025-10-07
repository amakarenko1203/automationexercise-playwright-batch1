import { BasePage } from "./basePage";
import { expect, Locator, Page } from "@playwright/test";

export class ProductsDetailPage extends BasePage {
    private productName: Locator;
    private productCategory: Locator;
    private productPrice: Locator;
    private productAvailability: Locator;
    private productCondition: Locator;
    private productBrand: Locator;
    private quantityInput: Locator;
    private addToCartButton: Locator;
    private productDetailTitle: Locator;
    private addedToCartModal: Locator;
    private viewCartButton: Locator;

    constructor(page: Page) {
        super(page);

        this.productName = page.locator('.product-information h2');
        this.productCategory = page.locator('.product-information p:has-text("Category")');
        this.productPrice = page.locator('.product-information span span');
        this.productAvailability = page.locator('.product-information p:has-text("Availability")');
        this.productCondition = page.locator('.product-information p:has-text("Condition")');
        this.productBrand = page.locator('.product-information p:has-text("Brand")');
        this.quantityInput = page.locator('input[name="quantity"]');
        this.addToCartButton = page.locator('.btn.btn-default.cart');
        this.productDetailTitle = page.locator('h2:has-text("Product Detail")');
        this.addedToCartModal = page.locator('.modal-content');
        this.viewCartButton = page.locator('u:text("View Cart")');
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
    async isQuantityInputVisible(): Promise<void> {
        await expect(this.quantityInput).toBeVisible();
    }

    async isAddToCartButtonVisible(): Promise<void> {
        await expect(this.addToCartButton).toBeVisible();
    }

    async verifyProductDetailPage(): Promise<void> {
        await expect(this.quantityInput).toBeVisible();
        await expect(this.addToCartButton).toBeVisible();
    }

    async clearQuantityInput(): Promise<void> {
        await this.quantityInput.clear();
    }

    async fillQuantityInput(quantity: number): Promise<void> {
        await this.quantityInput.fill(quantity.toString());
    }

    async verifyQuantityValue(quantity: number): Promise<void> {
        await expect(this.quantityInput).toHaveValue(quantity.toString());
    }
    async clickAddToCartButton(): Promise<void> {
        await this.addToCartButton.click();
    }
    async verifyAddedToCartModal(): Promise<void> {
        await expect(this.addedToCartModal).toBeVisible();
    }
    async clickViewCartFromModal(): Promise<void> {
        await this.viewCartButton.click();
    }
}