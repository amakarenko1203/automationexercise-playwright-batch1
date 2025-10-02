import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./basePage";      
export class ProductsDetailPage extends BasePage {
   
    private productName: Locator;
    private productCategory: Locator;
    private productPrice: Locator
    private productAvailability: Locator;
    private productCondition: Locator
    private productBrand: Locator;

      //writing review methods
    private reviewTitle: Locator;
    private nameField: Locator;
    private emailField: Locator; 
    private reviewTextArea: Locator;
    private submitButton: Locator;
    private reviewSuccessMessage: Locator;

    constructor(page: Page) {
        super(page);
 
        this.productName = page.locator('.product-information h2');
        this.productCategory = page.locator('.product-information p:has-text("Category")');
        this.productPrice = page.locator('.product-information span span');
        this.productAvailability = page.locator('.product-information p:has-text("Availability")');
        this.productCondition = page.locator('.product-information p:has-text("Condition")');
        this.productBrand = page.locator('.product-information p:has-text("Brand")');

        //writing review locators
        this.reviewTitle = page.getByRole('list').filter({ hasText: 'Write Your Review' })
        this.nameField = page.getByRole('textbox', { name: 'Your Name' })
        this.emailField = page.getByRole('textbox', { name: 'Email Address', exact: true })
        this.reviewTextArea = page.getByRole('textbox', { name: 'Add Review Here!' })
        this.submitButton = page.getByRole('button', { name: 'Submit' })
        this.reviewSuccessMessage = page.locator('.alert-success');

    }
    async isProductNameVisible(): Promise<void> {
        await expect(this.productName).toBeVisible();
    }       
    async isProductCategoryVisible(): Promise<void> {
        await expect(this.productCategory).toBeVisible();
    }   
    async isProductPriceVisible(): Promise<void> {
        await expect(this.productPrice).toBeVisible();
    }
    async isProductAvailabilityVisible(): Promise<void> {
        await expect(this.productAvailability).toBeVisible();
    }
    async isProductConditionVisible(): Promise<void> {
        await expect(this.productCondition).toBeVisible();
    }  
    async isProductBrandVisible(): Promise<void> {
        await expect(this.productBrand).toBeVisible();
    }
    //writing review methods
    async isReviewTitleVisible(): Promise<void> {
        await expect(this.reviewTitle).toBeVisible();
    }
    async enterReviewDetails(name: string, email: string, review: string): Promise<void> {
        await this.nameField.fill(name);
        await this.emailField.fill(email);
        await this.reviewTextArea.fill(review);
    }
    async submitReview(): Promise<void> {
        await this.submitButton.click();
    }
    async isReviewSuccessMessageVisible(): Promise<void> {
        await expect(this.reviewSuccessMessage).toBeVisible();
    }

    async verifyReviewSuccessMessage(): Promise<void> {
        await expect(this.reviewSuccessMessage).toBeVisible();
        await expect(this.reviewSuccessMessage).toContainText('Thank you for your review');
    }   
}
