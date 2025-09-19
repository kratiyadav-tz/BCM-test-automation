import {test, expect} from '@playwright/test';
import {RedeemPage} from '../Pages/redeemPage';
import {redeemCodes} from '../Utils/redeemCode.js';

test('Vaidate the title of Redeem Page', async({ page })=>{

    const redeemPage  = new RedeemPage(page);
    await redeemPage.navigateToRedeemPage();
    await expect (redeemPage.redeemPageTitle).toHaveText('Enter your code');

})

test('Validate if the inpute field for code is present',async({ page })=>{

     const redeemPage = new RedeemPage(page);
     await redeemPage.navigateToRedeemPage();
     await expect (redeemPage.code).toBeVisible();

})

test.describe('Redeem code Functionality Testa', async() =>{

    test('validate with invalid code', async({ page })=>{
     const redeemPage  = new RedeemPage( page);
     await redeemPage.navigateToRedeemPage();
     await redeemPage.code.fill(redeemCodes.invalidCode.code);
     await redeemPage.submitButton.click();
     await expect (redeemPage.invalidErrorMessage).toHaveText("Invalid code.");

   })

    test('validate with incorrect code', async({ page })=>{
    const redeemPage = new RedeemPage(page);
    await redeemPage.navigateToRedeemPage();
    await redeemPage.code.fill(redeemCodes.incorrectCode.code);
    await redeemPage.submitButton.click();
    await expect (redeemPage.incorrectErrorMessage).toHaveText("This code is not valid.");

   })

    test('Validate with empty Code', async ({ page}) =>{

    const redeemPage = new RedeemPage(page);
    await redeemPage.navigateToRedeemPage();
    await redeemPage.code.fill(redeemCodes.emptyCode.code);
    await redeemPage.submitButton.click();
    await expect (redeemPage.emptyErrorMessage).toHaveText("You must enter a code.");  
   })


})