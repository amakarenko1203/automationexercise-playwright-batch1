import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/homePage';
import { LoginSignUpPage } from '../../pages/loginSignUpPage';

test.describe('Successful Login and Logout Test Case', () => {
    let homePage: HomePage;
    let loginSignUpPage: LoginSignUpPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        loginSignUpPage = new LoginSignUpPage(page);
        const url = process.env.baseURL;
        await page.goto(url!);
        await homePage.verifyHomePage();
        await homePage.clickOnNavLink('Signup / Login');
    });

    test('Verify successful login', async ({ page }) => {
        await loginSignUpPage.isLoginTitleVisible();
        await loginSignUpPage.verifyLoginTitleText();
        await loginSignUpPage.fillLoginEmail('johndeli@gmail.com');
        await loginSignUpPage.fillLoginPassword('johndeli!');
        await loginSignUpPage.clickLoginButton();
        await loginSignUpPage.isLoggedInTextVisible();
        await loginSignUpPage.verifyLoggedInAsUsernameText();
    });

    test('Verify successful login and logout flow', async ({ page }) => {
        await loginSignUpPage.isLoginTitleVisible();
        await loginSignUpPage.verifyLoginTitleText();
        await loginSignUpPage.fillLoginEmail('johndeli@gmail.com');
        await loginSignUpPage.fillLoginPassword('johndeli!');
        await loginSignUpPage.clickLoginButton();
        await loginSignUpPage.isLoggedInTextVisible();
        await loginSignUpPage.verifyLoggedInAsUsernameText();
        await loginSignUpPage.clickLogoutButton();
        await loginSignUpPage.isBackOnLoginPage();
        await loginSignUpPage.verifyBackOnLoginPageTitle();
    });
});