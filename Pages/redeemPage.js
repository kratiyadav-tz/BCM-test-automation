export class RedeemPage{
        constructor(page){
              this.page = page;
              this.redeemPageTitle = page.locator("//div[@class='flex xs10 headline']");
              this.code = page.locator("//input[@aria-label='Code']");
              this.submitButton = page.locator("//button[@class='v-btn v-btn--large theme--light secondary']")
              this.invalidErrorMessage = page.locator("//div[normalize-space()='Invalid code.']");
              this.incorrectErrorMessage = page.locator("//div[normalize-space()='This code is not valid.']");
              this.emptyErrorMessage = page.locator("//div[normalize-space()='You must enter a code.']");


        }

        async navigateToRedeemPage(){

         await this.page.goto("https://app.brainingcamp.com/redeem");
         }







}