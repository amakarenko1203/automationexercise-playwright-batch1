import {expect, Locator, Page} from '@playwright/test';
import {BasePage} from './basePage';

export class CategoryPage extends BasePage {
    categoryTitle: Locator;
    categoryPageTitle: Locator;
    
    constructor(page: Page) {
        super(page);
        this.categoryTitle = page.getByRole('heading', { name: 'Category' });
        this.categoryPageTitle = page.locator('.title.text-center');
    }
    
    async isCategoryTitleVisible() {
        await expect(this.categoryTitle).toBeVisible();
    }
    
    async verifyCategoryTitleText() {
        await expect(this.categoryTitle).toHaveText('Category');
    }
    
    async verifyCategoryPageDisplayed(): Promise<void> {
        await expect(this.categoryPageTitle).toBeVisible();
    }
    async verifyCategoryPageTitle(expectedTitle: string): Promise<void> {
        await expect(this.categoryPageTitle).toHaveText(expectedTitle);
    }
    
    async verifyWomenCategoryPageDisplayed(): Promise<void> {
        await this.verifyCategoryPageDisplayed();
    }
    
    async verifyWomenDressProductsTitle(): Promise<void> {
        await this.verifyCategoryPageTitle('WOMEN - DRESS PRODUCTS');
    }
    
    async verifyMenCategoryPageDisplayed(): Promise<void> {
        await this.verifyCategoryPageDisplayed();
    }
    
    async verifyMenTshirtsProductsTitle(): Promise<void> {
        await this.verifyCategoryPageTitle('MEN - TSHIRTS PRODUCTS');
    }
}