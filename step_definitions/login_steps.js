/// <reference types='codeceptjs' />
const config = require('../framework/config/config.js')
const expect = require('chai').expect;

const { I, loginPage } = inject();

Given('I am on the ParaBank login page', () => {
  loginPage.visit();
});

When('I log in with the correct data', () => {
  const { user } = config.credentials;
  loginPage.login(user);
});

When('I submit the credentials', () => {
  loginPage.loginButtonClick();
});

Then('I should be successfully logged in', () => {
  I.seeElement(loginPage.fields.welcomeText)
});

Then('I should see an empty credentials error', () => {
  I.seeElement(loginPage.fields.emptyCredentialsError)
});