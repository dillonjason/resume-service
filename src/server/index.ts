import config from "config";
import fastify from "fastify";

import { connectDatabase } from "../data";
import { apolloServer } from "../graphql";
import { gqlUploadPlugin } from "./plugins/gqlUpload";
import personal from "./routes/personal";

const app = fastify({ logger: true });

(async function () {
  // GraphQL File Upload
  app.register(gqlUploadPlugin);

  // Connect to database
  app.register(connectDatabase);

  // Attach Apollo server
  app.register(await apolloServer());

  // Routes
  app.register(personal);

  app.listen(config.get("app.port"), "0.0.0.0", (error) => {
    if (error) {
      app.log.error(error);
      process.exit(1);
    }
  });
})();
