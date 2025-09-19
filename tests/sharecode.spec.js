import {test, expect} from '@playwright/test';
import {ShareCode} from '../Pages/shareCode';
import {shareCodes} from '../Utils/shareCodeData.js';

test('validate if the sharecodefield is prestent', async({ page }) =>{

        const shareCode  = new ShareCode(page);
        await shareCode.navigateToPage();
        await expect(shareCode.shareCodeField).toBeVisible();

})

test.describe('Share Code Functionality Tests from main page', () => {

          test('Share Code Test with invalid share code', async ({ page }) => {

            const shareCode = new ShareCode(page);
            await shareCode.navigateToPage();
            await shareCode.shareCodeField.fill(shareCodes.invalidShareCode);
            await shareCode.goButton.click();
            await expect(shareCode.invalidErrorMessage).toHaveText('This code is not valid.');

          })


          test('Share Code Test with incorrect share code', async ({ page }) => {
            const shareCode = new ShareCode(page);
            await shareCode.navigateToPage();
            await shareCode.shareCodeField.fill(shareCodes.incorrecrtShareCode);
            await shareCode.goButton.click();
            await expect(shareCode.incorrecrtErrorMessage).toHaveText('8 characters required.');

          })

          test('Share Code Test with empty share code', async ({ page }) => {
            const shareCode = new ShareCode(page);
            await shareCode.navigateToPage();
            await shareCode.shareCodeField.fill(shareCodes.emptyShareCode);
            await shareCode.goButton.click();
            await expect(shareCode.emptyErrorMessage).toHaveText('8 characters required.');

          })

          test('Share Code Test with valid share code', async ({ page }) => {

            const shareCode = new ShareCode(page);
            await shareCode.navigateToPage();
            await shareCode.shareCodeField.fill(shareCodes.validShareCode);
            await shareCode.goButton.click();
            await expect(shareCode.validShareCodeCondition).toBeVisible();

         })

})


test('validate share functinality from any mnipulative Page', async({ page }) =>{

        const shareCode = new ShareCode(page);
        await shareCode.navigateToManipulativePage();
        await shareCode.shareButton.click();
        await expect(shareCode.sharePopup).toBeVisible();
        

})