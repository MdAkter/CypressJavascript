const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  env: {

    url:'https://rahulshettyacademy.com',
    userId: 'gggac',
    password: 'adh13'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/integration/examples/*.js'
  },
});
