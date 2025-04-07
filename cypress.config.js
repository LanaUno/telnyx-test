const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "xefqfb",
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://telnyx.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
