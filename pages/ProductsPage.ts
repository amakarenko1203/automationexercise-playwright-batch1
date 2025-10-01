import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./basePage";

export class ProductsPage extends BasePage {
  private allProductsTitle: Locator;
  private searchInput: Locator;
  private searchButton: Locator;
  private productsList: Locator;
  private viewProductButtons: Locator;
  private productNames: Locator;
  private allProductsPage: Locator;
  private searchedProductsT: Locator;

    constructor(page: Page) {
        super(page);
        this.allProductsTitle = page.locator('h2[class="title text-center"]');
        this.searchInput = page.locator('#search_product');
        this.searchButton = page.locator('#submit_search');
        this.productsList = page.locator('div[class="col-sm-4"]');
        this.viewProductButtons = page.locator('a[href*="/product_details/"]');
        this.productNames = page.locator('.productinfo.text-center p');
        this.allProductsPage = page.getByRole('heading', { name: 'All Products' })

    }
    async isAllProductsTitleVisible(): Promise<void> {
        await expect(this.allProductsTitle).toBeVisible();
    }
    async isSearchInputVisible(): Promise<void> {
        await expect(this.searchInput).toBeVisible();
    }
    async isSearchButtonVisible(): Promise<void> {
        await expect(this.searchButton).toBeVisible();
    }
    async isProductsListVisible(): Promise<void> {
        await expect(this.productsList).toBeVisible();
    }
    async isViewProductButtonsVisible(): Promise<void> {
        await expect(this.viewProductButtons).toBeVisible();
    }
    async isProductNamesVisible(): Promise<void> {
        await expect(this.productNames).toBeVisible();
    }
    async verifyAllProductsPage(): Promise<void> {
        await expect(this.allProductsPage).toBeVisible();
    }
    async searchForProduct(productName: string): Promise<void> {
        await this.searchInput.fill(productName);
        await this.searchButton.click();
    }
}