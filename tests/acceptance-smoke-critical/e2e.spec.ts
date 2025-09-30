import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/homePage';
import { LoginSignUpPage } from '../../pages/loginSignUpPage';
import {faker} from '@faker-js/faker';
import { SignUpPage } from '../../pages/signUpPage';

test.describe('End to end test cases ', () => {
    let homePage: HomePage;
    let loginSignUpPage: LoginSignUpPage;

    test.beforeEach('Setting up preconditions',async ({ page }) => {
        loginSignUpPage = new LoginSignUpPage(page);
        homePage = new HomePage(page);
        const url=process.env.baseURL 
        const userName=process.env.username
        const password=process.env.password
        console.log(url)
        await page.goto(url!);
    })
  test('End to end account create and delete flow', async ({ page }) => {

    await homePage.verifyHomePage()
  // await homePage.clickOnNavLink('Signup / Login')
  await loginSignUpPage.clickOnNavLink('Signup / Login')
  await loginSignUpPage.validateSignUpTitle()
    
  const fullName=faker.person.fullName();
    const email=faker.internet.email();

    await loginSignUpPage.signUpWithNameAndEmail(fullName,email)
    const signUpPage = new SignUpPage(page);
    await signUpPage.fillAccountDetails('Mr', 'password123', '10', '5', '1990')

  // await page.waitForTimeout(30_000)
  });

  test('Test show for faker', async ({ page }) => {
    console.log(faker.person.fullName());
    console.log(faker.internet.email());
    console.log(faker.phone.number());
    console.log(faker.location.city());
    console.log(faker.location.country());

  });
});