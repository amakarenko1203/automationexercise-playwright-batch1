import { test } from '@playwright/test';
import { HomePage } from '../../pages/homePage';
import { ProductsDetailPage } from '../../pages/productsDetailPage';
import { CartPage } from '../../pages/cartPage';

test.describe('Add Product with Specific Quantity Test', () => {
    let homePage: HomePage;
    let productsDetailPage: ProductsDetailPage;
    let cartPage: CartPage;
    const baseUrl = process.env.baseURL!;

    test.beforeEach(async ({ page }) => {
        // Steps 1-3: Launch browser, navigate and verify home page
        homePage = new HomePage(page);
        productsDetailPage = new ProductsDetailPage(page);
        cartPage = new CartPage(page);
        
        await page.goto(baseUrl);
        await homePage.verifyHomePage();
    });

    test('Add product with quantity 4 to cart and verify', async ({ page }) => {
        const quantity = 4;
    
        await homePage.clickViewProductForFirstProduct();
        await productsDetailPage.verifyProductDetailPage();
        await productsDetailPage.fillQuantityInput(quantity);
        await productsDetailPage.verifyQuantityValue(quantity);
        await productsDetailPage.clickAddToCartButton();
        await productsDetailPage.verifyAddedToCartModal();
        await productsDetailPage.clickViewCartFromModal();
        await cartPage.verifyCartPageVisible();
        await cartPage.verifyCartPageTitle();
        await cartPage.verifyProductsInCart();
        await cartPage.verifyProductQuantity(quantity);
    });
});



