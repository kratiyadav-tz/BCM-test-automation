export class PricingPage{
         constructor(page){
            this.page = page;
            this.pricingPageTitle = page.locator("//h1[contains(text(),'Loved by over')]");
            this.FAQ = page.locator('button.chakra-accordion__button');
            this.FAQTtile = page.getByRole('heading', { name: 'Frequently Asked Questions' })
            this.FAQQuestionsPanel = page.locator('.v-expansion-panel.faq-panel');

         }

         async navigateToPricingPage(){

         await this.page.goto("https://www.brainingcamp.com/pricing");
         }


}