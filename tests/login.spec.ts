import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';

test('test', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.goToLoginPage();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');

  
});