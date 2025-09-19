import {test,expect} from '@playwright/test';
import { chromium } from 'playwright';
import { LoginPage } from './Pages/loginPage.js';
import { users } from './Utils/loginTestData.js';

export default async config =>{
  const browser = await chromium.launch({ headless: false, slowMo: 100 });
  const page = await browser.newPage();

  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(users.validUser.userName, users.validUser.password);
   await page.waitForURL('https://app.brainingcamp.com/');

  // Save the authenticated storage state
  await page.context().storageState({ path: 'storageState.json' });

  await browser.close();
};







