const { I } = inject();

module.exports = {
  // локаторы
  fields: {
    payeeName: '//input[@name="payee.name"]',
    street: '//input[@name="payee.address.street"]',
    city: '//input[@name="payee.address.city"]',
    state: '//input[@name="payee.address.state"]',
    zipCode: '//input[@name="payee.address.zipCode"]',
    phoneNumber: '//input[@name="payee.phoneNumber"]',
    accountNumber: '//input[@name="payee.accountNumber"]',
    repeatedAccountNumber: '//input[@name="verifyAccount"]',
    amount: '//input[@name="amount"]',
    fromAccount: '//select[@name="fromAccountId"]',
    sendPaymentButton: '//input[@class="button"]',
    successMessage: '//h1[contains(text(),"Bill Payment Complete")]',
    matchingAccountsError: '//span[contains(text(),"The account numbers do not match")]',
    emptyAmountError: '//span[contains(text(),"The amount cannot be empty")]'
  },

  // методы
  visit () {
    I.amOnPage('https://parabank.parasoft.com/parabank/billpay.htm')
  },
  sendPaymentButtonClick () {
    I.click(this.fields.sendPaymentButton)
  },
  fillPayeeName(value) {
    I.fillField(this.fields.payeeName, value)
  },
  fillStreet(value) {
    I.fillField(this.fields.street, value)
  },
  fillCity(value) {
    I.fillField(this.fields.city, value)
  },
  fillState(value) {
    I.fillField(this.fields.state, value)
  },
  fillZipCode(value) {
    I.fillField(this.fields.zipCode, value)
  },
  fillPhoneNumber(value) {
    I.fillField(this.fields.phoneNumber, value)
  },
  fillAccountNumber(value) {
    I.fillField(this.fields.accountNumber, value)
  },
  fillRepeatedAccountNumber(value) {
    I.fillField(this.fields.accountNumber, value)
  },
  fillAmount(value) {
    I.fillField(this.fields.amount, value)
  },
  
  fillAddressData ({ street, city, state, zipCode }) {
    this.fillStreet(street)
    this.fillCity(city)
    this.fillState(state)
    this.fillZipCode(zipCode)
  },

  fillAccountData ({ accountNumber, repeatedAccountNumber }) {
    this.fillAccountNumber(accountNumber)
    this.fillRepeatedAccountNumber(repeatedAccountNumber)
  },

  fillPayeeData ({ payeeName, phoneNumber }) {
    this.fillPayeeName(payeeName)
    this.fillPhoneNumber(phoneNumber)
  }

};