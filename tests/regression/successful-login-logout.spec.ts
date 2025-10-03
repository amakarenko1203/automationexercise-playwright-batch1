import { test } from '@playwright/test';
import { HomePage } from '../../pages/homePage';
import { LoginSignUpPage } from '../../pages/loginSignUpPage';

test.describe('Login with valid credentials Test', () => {
    let homePage: HomePage;
    let loginSignUpPage: LoginSignUpPage;

    test.beforeEach(async ({ page }) => {

        homePage = new HomePage(page);
        loginSignUpPage = new LoginSignUpPage(page);
        await page.goto(process.env.baseURL!);
        await homePage.verifyHomePage();
        await homePage.clickOnNavLink('Signup / Login');
        await loginSignUpPage.isLoginTitleVisible();
        await loginSignUpPage.verifyLoginTitleText();
        await loginSignUpPage.fillLoginEmail(process.env.username!);
        await loginSignUpPage.fillLoginPassword(process.env.password!);
        await loginSignUpPage.clickLoginButton();
    });

    test('Login with valid credentials and verify success message', async ({ page }) => {

        await loginSignUpPage.isLoggedInTextVisible();
        await loginSignUpPage.verifyLoggedInAsUsernameText();
    });

    test('Verify successful login and logout', async ({ page }) => {
        
        await loginSignUpPage.isLoggedInTextVisible();
        await loginSignUpPage.verifyLoggedInAsUsernameText();
        await loginSignUpPage.clickLogoutButton();
        await loginSignUpPage.isBackOnLoginPage();
        await loginSignUpPage.verifyBackOnLoginPageTitle();
    });
});