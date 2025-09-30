import {test} from '@playwright/test';
import { HomePage } from '../../pages/homePage';
import { SubscriptionPage } from '../../pages/subscriptionPage';

test.describe('Subscription flow tests', () => {
    let homePage: HomePage;
    let subscriptionPage: SubscriptionPage;
    test.beforeEach('Setting up preconditions',async ({ page }) => {
        homePage = new HomePage(page);
        subscriptionPage = new SubscriptionPage(page);  
        const url=process.env.baseURL 
    await page.goto(url!);
});

test('Verify Subscription in home page', async ({ page }) => {
    await homePage.scrollToFooter();
    await homePage.isFooterVisible();
    await subscriptionPage.subscribe('annamakarenko1996@gmail.com');
    await subscriptionPage.verifySubscriptionSuccessMessage();
});
});