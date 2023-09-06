const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  env: {

    url:'https://rahulshettyacademy.com',
    userId: 'gggac',
    password: 'adh13'
  },
  reporter: 'cypress-mochawesome-reporter',  // No.1 ----This is for the mocha reporter that is added here
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on); // No2. ----This is for the mocha reporter that is added here
    },
    specPattern:'cypress/integration/examples/*.js'
  },
});
