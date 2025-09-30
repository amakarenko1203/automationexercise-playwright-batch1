import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './basePage';

export class LoginSignUpPage extends BasePage {
  private signUpTitle: Locator;
  private readonly expectedSignUpTitleText = 'New User Signup!';
  private nameField: Locator;
  private emailField: Locator;
  private signUpButton: Locator;

  constructor(page: Page) {
    super(page);
    this.signUpTitle = page.getByRole('heading', { name: this.expectedSignUpTitleText });
    this.nameField = page.getByRole('textbox', { name: 'Name' });
    this.emailField = page.getByRole('textbox', { name: 'Email' });
    this.signUpButton = page.getByRole('button', { name: 'Signup' });
  }

  async validateSignUpTitle(): Promise<void> {
     expect(this.signUpTitle).toBeVisible();
     expect(this.signUpTitle).toHaveText(this.expectedSignUpTitleText);
  }

async signUpWithNameAndEmail(name: string, email: string): Promise<void> {
    await this.nameField.fill(name);
    await this.emailField.fill(email);
    await this.signUpButton.click();
  }
}
