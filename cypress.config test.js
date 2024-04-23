const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin, afterRunHandler } = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const fs = require('fs');

const setupNodeEvents = async (on, config) => {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    }),
  );

  on('after:run', async (results) => {
    if (results) {
      await afterRunHandler(config);
      fs.writeFile("cypress/Reports/results.json", JSON.stringify(results));
    }
  });

  return config;
};

module.exports = defineConfig({
  projectId: 'g33y9s',
  env: {
    url: "https://rahulshettyacademy.com",
  },
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/integration/examples/BDD/*.feature'
  },
});