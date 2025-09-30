import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductsPage extends BasePage {
  readonly page: Page;
  readonly productsTitle: Locator;
  readonly productsList: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly allProducts: Locator;
  readonly viewProductButtons: Locator;
  readonly addToCartButtons: Locator;
  readonly brandsPanel: Locator;
  readonly categoryPanel: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    
    this.productsTitle = page.locator('.title.text-center');
    this.productsList = page.locator('.features_items');
    this.searchInput = page.locator('#search_product');
    this.searchButton = page.locator('#submit_search');
    this.allProducts = page.locator('.single-products');
    this.viewProductButtons = page.locator('a[href*="/product_details/"]');
    this.addToCartButtons = page.locator('.add-to-cart');
    this.brandsPanel = page.locator('.brands_products');
    this.categoryPanel = page.locator('.category-products');
  }

  async navigateToProductsPage(): Promise<void> {
    await this.page.goto('/products');
    await this.waitForPageLoad();
  }

  async searchProduct(productName: string): Promise<void> {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
    await this.waitForPageLoad();
  }

  async getProductCount(): Promise<number> {
    return await this.allProducts.count();
  }

  async clickViewProduct(index: number = 0): Promise<void> {
    await this.viewProductButtons.nth(index).click();
  }

  async addProductToCart(index: number = 0): Promise<void> {
    await this.addToCartButtons.nth(index).click();
  }

  async getProductName(index: number = 0): Promise<string> {
    const productName = this.page.locator('.single-products').nth(index).locator('p');
    return await productName.textContent() || '';
  }

  async getProductPrice(index: number = 0): Promise<string> {
    const productPrice = this.page.locator('.single-products').nth(index).locator('h2');
    return await productPrice.textContent() || '';
  }

  async verifyProductsPageIsVisible(): Promise<boolean> {
    return await this.productsTitle.isVisible() && await this.productsList.isVisible();
  }

  async verifyAllProductsAreVisible(): Promise<boolean> {
    const productCount = await this.getProductCount();
    return productCount > 0;
  }

  async clickBrand(brandName: string): Promise<void> {
    const brandLink = this.page.locator(`a[href*="/brand_products/${brandName}"]`);
    await brandLink.click();
  }

  async clickCategory(categoryName: string): Promise<void> {
    const categoryLink = this.page.locator(`a[href*="${categoryName}"]`);
    await categoryLink.click();
  }

  async verifySearchedProductsAreVisible(): Promise<boolean> {
    const searchedProductsTitle = this.page.locator('.title.text-center');
    const titleText = await searchedProductsTitle.textContent();
    return titleText?.includes('SEARCHED PRODUCTS') || false;
  }
}