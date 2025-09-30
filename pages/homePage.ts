import {Locator,Page, expect} from '@playwright/test';
import { BasePage } from './basePage';

export class HomePage extends BasePage {
    private Logo: Locator
    private TestCasessButton: Locator
   
    constructor(page: Page) {
        super(page);
        this.Logo = page.getByRole('link',{name:"Website for automation"});
        this.TestCasessButton = page.getByRole('link', { name: 'Test Cases' });
    }

async verifyHomePage(){
    await expect(this.Logo).toBeVisible();

}
async isLogoVisible(): Promise<void> {
    await expect(this.Logo).toBeVisible();
  }
async clickTestCasesButton(): Promise<void> {
    await this.TestCasessButton.click();
  }  
}