import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./basePage";

export class ProductsPage extends BasePage {
  private allProductsTitle: Locator;
  private searchInput: Locator;
  private searchButton: Locator;
  private productsList: Locator;
  private viewProductButton: Locator;
  private productNames: Locator;
  private allProductsPage: Locator;
  private searchedProducts: Locator;
  private viewFirstProductButton: Locator;
  private clickOnFirstViewProductButton: Locator;

    constructor(page: Page) {
        super(page);
        this.allProductsTitle = page.locator('h2[class="title text-center"]');
        this.searchInput = page.locator('#search_product');
        this.searchButton = page.locator('#submit_search');
        this.productsList = page.locator('div[class="col-sm-4"]');
        this.viewProductButton = page.locator('a[href*="/product_details/"]');
        this.productNames = page.locator('.productinfo.text-center p');
        this.allProductsPage = page.getByRole('heading', { name: 'All Products' })
        this.searchedProducts = page.locator('.features_items');
        this.viewFirstProductButton = page.locator('.nav.nav-pills.nav-justified > li > a').first();
        this.clickOnFirstViewProductButton = page.locator('.nav.nav-pills.nav-justified > li > a').first();

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
        await expect(this.viewProductButton).toBeVisible();
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
    async isSearchedProductsVisible(): Promise<void> {
        await expect(this.searchedProducts).toBeVisible();
    }
    async clickViewFirstProductButton(): Promise<void> {
        await this.viewFirstProductButton.click();
    }
    async clickOnFirstViewProduct(): Promise<void> {
        await this.clickOnFirstViewProductButton.click();
    }
}