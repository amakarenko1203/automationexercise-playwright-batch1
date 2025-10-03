import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './basePage';

export class LoginSignUpPage extends BasePage {


  private nameField: Locator;
  private emailField: Locator;


  private loginTitle: Locator;
  private loginEmailField: Locator;
  private loginPasswordField: Locator;
  private loginButton: Locator;
  private loginErrorMessage: Locator;
  private loggedInText: Locator;
  private logoutButton: Locator;

  constructor(page: Page) {
    super(page);
    this.nameField = page.getByRole('textbox', { name: 'Name' });
    this.emailField = page.getByRole('textbox', { name: 'Email' });


    this.loginTitle = page.getByRole('heading', { name: 'Login to your account' });
    this.loginEmailField = page.locator('[data-qa="login-email"]');
    this.loginPasswordField = page.locator('[data-qa="login-password"]');
    this.loginButton = page.locator('[data-qa="login-button"]');
    this.loginErrorMessage = page.locator('.login-form p[style*="color: red"]');
    this.loggedInText = page.locator('text=Logged in as');
    this.logoutButton = page.getByRole('link', { name: 'Logout' });
  }

  async isLoginTitleVisible(): Promise<void> {
    await expect(this.loginTitle).toBeVisible();
  }
  async verifyLoginTitleText(): Promise<void> {
    await expect(this.loginTitle).toHaveText('Login to your account');
  }
  async fillLoginEmail(email: string): Promise<void> {
    await this.loginEmailField.fill(email);
  }

  async fillLoginPassword(password: string): Promise<void> {
    await this.loginPasswordField.fill(password);
  }
  async clickLoginButton(): Promise<void> {
    await this.loginButton.click();
  }
  async isLoginErrorMessageVisible(): Promise<void> {
    await expect(this.loginErrorMessage).toBeVisible();
  }
  async verifyLoginErrorMessageText(): Promise<void> {
    await expect(this.loginErrorMessage).toContainText('Your email or password is incorrect!');
  }

 
  async isLoggedInTextVisible(): Promise<void> {
    await expect(this.loggedInText).toBeVisible();
  }

  async verifyLoggedInAsUsernameText(): Promise<void> {
    await expect(this.loggedInText).toContainText('Logged in as');
  }

  async clickLogoutButton(): Promise<void> {
    await this.clickOnNavLink('Logout');
  }

  async isBackOnLoginPage(): Promise<void> {
    await this.isLoginTitleVisible();
  }

  async verifyBackOnLoginPageTitle(): Promise<void> {
    await this.verifyLoginTitleText();
  }
}
