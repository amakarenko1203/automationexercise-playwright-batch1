import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./basePage";


export class SearchPage extends BasePage {
  private searchedProductsTitle: Locator;
  private allProductsVisibleLocator: Locator;
 private viewProductButton: Locator;


    constructor(page: Page) {
        super(page);
        this.searchedProductsTitle = page.locator('h2[class="title text-center"]');
        this.allProductsVisibleLocator = page.locator('div[class="features_items"]');
        this.viewProductButton = page.locator('.nav.nav-pills.nav-justified > li > a').first();
      
   
    }
    async verifySearchedProductsTitle(): Promise<void> {
        await expect(this.searchedProductsTitle).toBeVisible();
        await expect(this.searchedProductsTitle).toHaveText('dress');

    }
    async verifyAllProductsVisible(): Promise<void> {
        for (let i = 0; i < await this.allProductsVisibleLocator.count(); i++) {
            await expect(this.allProductsVisibleLocator.nth(i)).toBeVisible();
        }
    }
    async clickOnViewProductButton(index: number): Promise<void> {
        await this.viewProductButton.nth(index).click();
    }
}