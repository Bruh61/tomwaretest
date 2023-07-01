import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.js';
import HomePage from '../pageobjects/home.page.js';
import FooterPage from '../pageobjects/footer.page.js';
import ContactPage from '../pageobjects/contact.page.js';
import ServicePage from '../pageobjects/service.page.js';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});
 
Then(/^I go through the Homepage/, async () => {
    await HomePage.assertHomepage();
});
Then(/^I go through the Footer/, async () => {
    await FooterPage.assertFooter();
});
Given(/^I am on the Contact Page/, async () => {
    await ContactPage.open();
});
Then(/^I go through the Contact Page/, async () => {
    await ContactPage.assertContactPage();
});
Given(/^I am on the Service Page/, async () => {
    await ServicePage.open();
});
Then(/^I go through the Service Page/, async () => {
    await ServicePage.assertServicePage();
    await FooterPage.assertFooter();
});
/*When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});*/

