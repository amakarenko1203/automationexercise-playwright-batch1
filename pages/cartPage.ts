import { BasePage } from "./basePage";
import { HomePage } from "./homePage";
import { expect, Page } from "@playwright/test";

export class CartPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

}