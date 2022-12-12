const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "x283ip",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
