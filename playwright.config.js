// playwright.config.js
// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({


  testDir: './tests',
  retries: 0,
  reporter: [['html'], ['list']], // HTML + Console reports
  globalSetup:  './global-setup.js',
  
  use: {

   launchOptions: {
      args: ['--start-maximized'], // For Chromium-based browsers
      },

    viewport: null,
    baseURL: 'https://app.brainingcamp.com',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    storageState: 'storageState.json', // logged-in state for all tests
    
  },
   projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    }
  
  ]

}



);
