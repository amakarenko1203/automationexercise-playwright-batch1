import { Locator, Page } from "@playwright/test";

export class BasePage {
 page: Page
private topNavigationLocators: Locator

constructor(page: Page) {
    this.page = page;
    this.topNavigationLocators = page.locator('ul[class="navbar-nav"]');
}

async clickOnNavLink(linkText: string){
    await this.topNavigationLocators.getByText(linkText).click();
}
}