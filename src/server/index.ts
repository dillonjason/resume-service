import fastify from "fastify";
import config from "config";
import connect from "../data";

import personal from "./routes/personal";

const app = fastify({ logger: true });
connect();

app.register(personal);

app.listen(config.get("app.port"), "0.0.0.0", (error) => {
  if (error) {
    app.log.error(error);
    process.exit(1);
  }
});
