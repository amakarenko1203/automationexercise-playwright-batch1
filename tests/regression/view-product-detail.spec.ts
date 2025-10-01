import {test} from '@playwright/test';
import { HomePage } from '../../pages/homePage';
import { ProductsDetailPage } from '../../pages/productsDetailPage';
import { ProductsPage } from '../../pages/productsPage';

test.describe('View Product Details', () => {
    let homePage: HomePage;
    let productsPage: ProductsPage;
    let productsDetailPage: ProductsDetailPage;

    test.beforeEach('Setting up preconditions', async ({ page }) => {
        homePage = new HomePage(page);
        productsPage = new ProductsPage(page);
        productsDetailPage = new ProductsDetailPage(page);
        const url = process.env.baseURL;
        await page.goto(url!);
        await homePage.verifyHomePage();
        await homePage.clickProductsButton();
        await productsPage.verifyAllProductsPage();
        await productsPage.clickViewFirstProductButton();
        await productsDetailPage.isProductNameVisible();
        await productsDetailPage.isProductCategoryVisible();
        await productsDetailPage.isProductPriceVisible();
        await productsDetailPage.isProductAvailabilityVisible();
        await productsDetailPage.isProductConditionVisible();
        await productsDetailPage.isProductBrandVisible();
    });
});

    
