import fastify from "fastify";
import config from "config";
import { connectDatabase } from "../data";

import personal from "./routes/personal";
import { apolloServer } from "../graphql";

const app = fastify({ logger: true });

(async function () {
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
