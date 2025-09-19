import {test, expect} from '@playwright/test';
import {PricingPage} from '../Pages/pricingPage';

test ('validate the pricing page title',async ({ page }) => {

    const pricingPage = new PricingPage(page);
    await pricingPage.navigateToPricingPage();
    await expect (pricingPage.pricingPageTitle).toHaveText('Loved by over 9 million educators and students worldwide!')
})

test('Validate the FQA section is present',async ({ page}) =>{
    const pricingPage = new PricingPage(page);
    await pricingPage.navigateToPricingPage();
    await expect(pricingPage.FAQTtile).toBeVisible();

})

test('check if FAQs are collapsable',async ({page}) =>{

    const pricingPage = new PricingPage(page);
    await pricingPage.navigateToPricingPage();

    await expect(pricingPage.FAQTtile).toBeVisible();

    const faqQuestions = pricingPage.FAQQuestionsPanel;
    const count = await faqQuestions.count();

    console.log(`Found ${count} FAQ questions`);

    for (let i = 0; i < count; i++) {
    const panel = faqQuestions.nth(i);
    const questionButton = panel.locator('.v-expansion-panel-title');
    const answerPanel = panel.locator('.v-expansion-panel-text');

    await questionButton.scrollIntoViewIfNeeded();

    //collaps the answer panel
    await questionButton.click();
    await expect(answerPanel).toBeVisible();

    // close the answer
    await questionButton.click();
    await expect(answerPanel).toBeHidden();
  }
    

})