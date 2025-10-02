import {test} from '@playwright/test';
import { HomePage } from '../../pages/homePage';
import { BrandPage } from '../../pages/brandPage';

test.describe('Brand Navigation', () => {
    let homePage: HomePage;
    let brandPage: BrandPage;
    test.beforeEach('Setting up preconditions',async ({ page }) => {
        homePage = new HomePage(page);
        brandPage = new BrandPage(page);
        const url=process.env.baseURL 
        await page.goto(url!);
        await homePage.clickProductsButton();
    });
    test('Verify Brands page is visible', async ({ page }) => {
        await brandPage.verifyBrandsVisible();
    });
    test('Verify user can navigate to brand page and see products', async ({ page }) => {
        await brandPage.clickOnPoloBrand();
        await brandPage.verifyPoloBrandPage();
        await brandPage.clickOnHMBrand();
        await brandPage.verifyHMBrandPage();
    });
});