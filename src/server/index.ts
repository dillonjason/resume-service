import fastify from "fastify";
import connect from "../data";

import PersonalModel from "../data/schema/personal";

const app = fastify({ logger: true });
connect();

app.get("/", async (request, reply) => {
  const personalData = await PersonalModel.findOne().exec();
  reply.send(personalData);
});

app.get("/create", async (request, reply) => {
  const newPersonal = await PersonalModel.create({
    firstName: "Dillon",
    lastName: "Jason",
    email: "test@test.com",
    phone: "123-456-7890",
  });

  reply.send(newPersonal);
});

app.listen(80, "0.0.0.0", (error, address) => {
  if (error) {
    app.log.error(error);
    process.exit(1);
  }

  app.log.info(`server listening on ${address}`);
});
