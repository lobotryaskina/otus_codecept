/// <reference types='codeceptjs' />
const config = require('../framework/config/config.js')
const expect = require('chai').expect;

const { I, billPaymentPage } = inject();

Given('I am on the ParaBank bill payment page', () => {
  billPaymentPage.visit();
});

When('I fill in the payee data', () => {
  const { payeeData } = config.paymentData.payeeData;
  billPaymentPage.fillPayeeData(payeeData);
});

When('I fill in the address data', () => {
    const { addressData } = config.paymentData.addressData;
    billPaymentPage.fillAddressData(addressData);
});

When('I fill in the account data', () => {
    const { accountData } = config.paymentData.accountData;
    billPaymentPage.fillAccountNumber(accountData);
    billPaymentPage.fillRepeatedAccountNumber(accountData);
});

When('I fill in the wrong account data', () => {
    const { accountData } = config.paymentData.accountData;
    billPaymentPage.fillAccountNumber(accountData);
    billPaymentPage.fillRepeatedAccountNumber('000000');
});

When('I fill in the amount', () => {
    const { amount } = config.paymentData.amount;
    billPaymentPage.fillAmount(amount);
});

When('I submit the bill payment form', () => {
    billPaymentPage.sendPaymentButtonClick();
});

Then('I should see a successfull payment message', () => {
  I.seeElement(billPaymentPage.fields.successMessage)
});

Then('I should see a not-matching account numbers error message', () => {
    I.seeElement(billPaymentPage.fields.matchingAccountsError)
});

Then('I should see an empty amount field error message', () => {
    I.seeElement(billPaymentPage.fields.emptyAmountError)
});