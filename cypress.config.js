const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/test/specs/*.cy.js", 
    baseUrl: "https://telnyx.com/",
    defaultCommandTimeout: 60000,
    pageLoadTimeout: 60000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});
