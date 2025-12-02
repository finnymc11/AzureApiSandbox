const { app } = require("@azure/functions");

app.http("HealthCheck", {
  methods: ["GET"],
  authLevel: "anonymous",
  route: "health",
  handler: async (request, context) => {
    context.log("HealthCheck function invoked (v4 model).");

    return {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      },
      jsonBody: {
        status: "ok",
        app: "finbar-app",
        region: "eastus2",
        message: "Hello from Azure Functions v4 + Node 22!",
        timestamp: new Date().toISOString()
      }
    };
  }
});
