const { I } = inject();

module.exports = {
  // локаторы
  fields: {
    username: '//input[@name="username"]',
    password: '//input[@name="password"]',
    loginButton: '//input[@value="Log In"]',
    welcomeText: '//b[normalize-space()="Welcome"]',
    emptyCredentialsError: '//p[@class="error"]'
  },

  // методы
  visit () {
    I.amOnPage('https://parabank.parasoft.com/parabank/index.htm')
  },
  loginButtonClick () {
    I.click(this.fields.registerButton)
  },
  fillUsername(value) {
    I.fillField(this.fields.username, value)
  },
  fillPassword(value) {
    I.fillField(this.fields.loginButton, value)
  },
  login ({ username, password }) {
    this.visit()
    this.fillUsername(username)
    this.fillPassword(password)
    this.loginButtonClick()
  }
};