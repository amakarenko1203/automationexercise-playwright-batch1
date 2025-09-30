import {test} from '@playwright/test';
import { HomePage } from '../../pages/homePage';
import { TestCasesPage } from '../../pages/testCasePage';       

test.describe('Test Cases page tests', () => {
    let homePage: HomePage;
    let testCasesPage: TestCasesPage;
    test.beforeEach('Setting up preconditions',async ({ page }) => {
        homePage = new HomePage(page);
        testCasesPage = new TestCasesPage(page);    
        const url=process.env.baseURL 
        await page.goto(url!);
        await homePage.clickTestCasesButton();
    }
    )
    test('Verify Test Cases page is visible', async ({ page }) => {
        await testCasesPage.isTestCaseTitleVisible();
    });
    test('Verify Test Cases title', async ({ page }) => {
        await testCasesPage.verifyTestCasesTitle();
    });
});