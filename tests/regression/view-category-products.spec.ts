import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/homePage';
import { CategoryPage } from '../../pages/category-page';

test.describe('View Category Products', () => {
    let homePage: HomePage;
    let categoryPage: CategoryPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        categoryPage = new CategoryPage(page);

        const url = process.env.baseURL
        await page.goto(url!);
    });

    test('View Category Products', async ({ page }) => {

        await homePage.verifyCategoriesPanelVisible();
        await homePage.clickWomenCategory();
        await homePage.clickWomenSubCategory('Dress');
        await categoryPage.verifyWomenCategoryPageDisplayed();
        await categoryPage.verifyWomenDressProductsTitle();
        await homePage.clickMenCategory();
        await homePage.clickMenSubCategory('Tshirts');
        await categoryPage.verifyMenCategoryPageDisplayed();
        await categoryPage.verifyMenTshirtsProductsTitle();
    });
});
