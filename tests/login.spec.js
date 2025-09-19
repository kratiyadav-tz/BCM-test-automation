import {test, expect} from '@playwright/test';
import {LoginPage} from '../Pages/loginPage';
import {users} from '../Utils/loginTestData.js';

test('Application Launch Test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await expect(page).toHaveTitle('Brainingcamp'); 
});

test.describe('Login Functionality Tests', () => {
      test('Login Test with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(users.validUser.userName, users.validUser.password);
        await expect(page.getByText('Manipulatives')).toBeVisible();
        });

    test('Login Test with invalid credentials', async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.goto();
      await loginPage.login(users.invalidUser.userName, users.invalidUser.password);
      await expect(loginPage.errorMessage).toBeVisible();
     });

    test('Login test with empty credentials', async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.goto();
      await loginPage.login(users.emptyUser.userName, users.emptyUser.password);
      await expect(loginPage.errorMessage).toBeVisible();
    })

});
