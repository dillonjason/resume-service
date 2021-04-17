import fastify from "fastify";
import "../data";

import PersonalModel from "../data/schema/personal";

const app = fastify({ logger: true });

app.get("/", async (request, reply) => {
  const personalData = await PersonalModel.findOne().exec();
  reply.send(personalData);
});

app.listen(80, "0.0.0.0", (error, address) => {
  if (error) {
    app.log.error(error);
    process.exit(1);
  }

  app.log.info(`server listening on ${address}`);
});
