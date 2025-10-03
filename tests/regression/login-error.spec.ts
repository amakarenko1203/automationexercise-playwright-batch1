import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/homePage';
import { LoginSignUpPage } from '../../pages/loginSignUpPage';
import { faker } from '@faker-js/faker';

test.describe('Login Error Test Case', () => {
    let homePage: HomePage;
    let loginSignUpPage: LoginSignUpPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        loginSignUpPage = new LoginSignUpPage(page);
        const url = process.env.baseURL
        await page.goto(url!);
        await homePage.verifyHomePage();
        await homePage.clickOnNavLink('Signup / Login');
    });

    test('Verify login error with incorrect credentials', async ({ page }) => {
        await loginSignUpPage.isLoginTitleVisible();
        await loginSignUpPage.verifyLoginTitleText();
        const randomEmail = faker.internet.email();
        const randomPassword = faker.internet.password();
        await loginSignUpPage.fillLoginEmail(randomEmail);
        await loginSignUpPage.fillLoginPassword(randomPassword);
        await loginSignUpPage.clickLoginButton();
        await loginSignUpPage.isLoginErrorMessageVisible();
        await loginSignUpPage.verifyLoginErrorMessageText();
    });
});