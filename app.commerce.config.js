const { defineConfig } = require("@adobe/aio-commerce-lib-app/config");

module.exports = defineConfig({
  metadata: {
    description:
      "A custom Adobe Commerce application. Fill description for your app.",
    displayName: "my-commerce-extension",
    id: "my-commerce-extension",
    version: "1.0.0",
  },
});
