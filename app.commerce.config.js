const { defineConfig } = require("@adobe/aio-commerce-lib-app/config");

module.exports = defineConfig({
  metadata: {
    description:
      "A custom Adobe Commerce application. Fill description for your app.",
    displayName: "my-commerce-extension",
    id: "my-commerce-extension",
    version: "1.0.0",
  },
  adminUi: {
    menu: {
      description: "Displays enriched order data in Commerce Admin.",
      id: "order_enrichment_admin",
      label: "Order Enrichment",
      pageTitle: "Enriched Orders Dashboard",
    },
  },
});
