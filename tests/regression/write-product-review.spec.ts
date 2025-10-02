import {test} from '@playwright/test';
import { HomePage } from '../../pages/homePage';
import { ProductsPage } from '../../pages/productsPage';
import { ProductsDetailPage } from '../../pages/productsDetailPage';

test.describe("Write Product Review", () => {
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
        await productsPage.clickViewFirstProductButton();
        await productsDetailPage.isProductNameVisible();
    });

    test('Write a product review successfully', async ({ page }) => {
        await productsDetailPage.isReviewTitleVisible();
        
        // Fill in the review form
        await productsDetailPage.enterReviewDetails(
            'John Snow',
            'john.snow@example.com',
            'This is an excellent product!'
        );
        await productsDetailPage.submitReview();
        await productsDetailPage.verifyReviewSuccessMessage();
    });

    test('Verify review form is visible on product detail page', async ({ page }) => {
        await productsDetailPage.isReviewTitleVisible();
    });
});