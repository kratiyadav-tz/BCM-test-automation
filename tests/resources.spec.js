import {test, expect} from '@playwright/test';
import {ResourcesPage} from '../Pages/resourcesPage';

test('validate the resource page title',async ({ page }) =>{
    const resourcesPage = new ResourcesPage(page);
    await resourcesPage.navigateToResourcePage();
    await expect (resourcesPage.resourcePageTitle).toHaveText('Resources for Math Educators');
})

test('validate the ideas section is visible', async({ page }) =>{
    const resourcesPage = new ResourcesPage(page);
    await resourcesPage.navigateToResourcePage();
    await expect (resourcesPage.ideasSection).toBeVisible();
})

test('Validate the explore button is visible and clickable', async ({ page}) => {
    const resourcesPage = new ResourcesPage(page);
    await resourcesPage.navigateToResourcePage();
    await expect (resourcesPage.exploreButton).toBeVisible();
    await resourcesPage.exploreButton.click();
    await expect(page).toHaveURL('https://www.brainingcamp.com/ideas');

})    

test('Validate the code copy functionality' , async ({ page}) =>{
    const resourcesPage = new ResourcesPage(page);
    await resourcesPage.navigateToResourcePage();
    await expect (resourcesPage.exploreButton).toBeVisible();
    await resourcesPage.exploreButton.click();
    await resourcesPage.code.click();
    console.log("copy button clicked");
    await expect (resourcesPage.copied).toHaveText("Copied",{timeout : 5000});
    console.log("code copied");

})