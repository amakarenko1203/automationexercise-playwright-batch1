
import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/homePage";
import { ProductsPage } from "../../pages/productsPage";
import { SearchPage } from "../../pages/searchProductsPage";
import { BasePage } from "../../pages/basePage";

test.describe('Search Product Test', () => {
  let homePage: HomePage;
  let productsPage: ProductsPage;
  let searchPage: SearchPage;
  let basePage: BasePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    productsPage = new ProductsPage(page);
    searchPage = new SearchPage(page);
    basePage = new BasePage(page);
  });
    test('Verify search product', async ({ page }) => {
        const url=process.env.baseURL 
        await page.goto(url!);
        await homePage.verifyHomePage();        
        await homePage.clickOnNavLink('Products');
        await productsPage.verifyAllProductsPage();
        await productsPage.searchForProduct('dress')
        await searchPage.verifySearchedProductsTitle()
        await searchPage.verifyAllProductsVisible();

    });
});
