import { BasePage } from "./basePage";
import { expect, Locator, Page } from "@playwright/test";

export class CartPage extends BasePage {
    private cartProductsList: Locator;
    private cartTitle: Locator;
    private productRows: Locator;
    private productQuantities: Locator;

    constructor(page: Page) {
        super(page);
        this.cartProductsList = page.locator('#cart_info_table');
        this.cartTitle = page.locator('h2[class="title text-center"]');
        this.productRows = page.locator('tbody tr');
        this.productQuantities = page.locator('td.cart_quantity .cart_quantity_button');
    }

    async verifyCartPageVisible(): Promise<void> {
        await expect(this.cartProductsList).toBeVisible();
    }

    async verifyCartPageTitle(): Promise<void> {
        await expect(this.cartTitle).toBeVisible();
    }

    async verifyProductsInCart(): Promise<void> {
        await expect(this.productRows.first()).toBeVisible();
        await expect(this.productRows).toHaveCountGreaterThan(0);
    }

    async verifyProductQuantity(expectedQuantity: number): Promise<void> {
        await expect(this.productQuantities.first()).toContainText(expectedQuantity.toString());
    }
}