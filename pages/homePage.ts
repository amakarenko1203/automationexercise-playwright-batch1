import {Locator,Page, expect} from '@playwright/test';
import { BasePage } from './basePage';

export class HomePage extends BasePage {
    private Logo: Locator
   
    constructor(page: Page) {
        super(page);
        this.Logo = page.getByRole('link',{name:"Website for automation"});
    }

async verifyHomePage(){
    await expect(this.Logo).toBeVisible();

}
}