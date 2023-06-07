import { test, expect } from '@playwright/test';
import { EnvConfig, userCredentials } from '../config';
import { setCookieVals } from '../utils'


test('Login test', async ({ page, context }) => {

  //Adding cookies to the browser using the context fixture from playwright
  const cookieVals = await setCookieVals();
  await context.addCookies(cookieVals);

  //I decided to use CSS and HTML attributes for the locators since the page doesn't have ids for the majority of elements
  await page.goto(EnvConfig.mainUrl);
  await page.locator(".btAccess" ).click();

  //Selecting and filling the lastest inputs with the attributes name and password in each case
  //.last() because the ion-inputs elements wrappers having the same name attribute
  await page.locator("[name=username]").last().fill(userCredentials.username);
  await page.locator("[name=password]").last().fill(userCredentials.password);

  //A similar case like before with the button but using .first() because the several submit buttons inside the html
  await page.locator("[type=submit]").first().click();

  //Assertion using the same username that we used before to check if we're actually logged in
  await expect(page.locator(".icon-icono_avatar")).toBeVisible();

});