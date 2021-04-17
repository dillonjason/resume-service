import { FastifyPluginCallback } from "fastify";
import PersonalModel, { PersonalDocument } from "../../data/schema/personal";

const Path = "/personal";

const personal: FastifyPluginCallback = (app, options, done) => {
  app.post(Path, async (request, reply) => {
    const newPersonal = await PersonalModel.create(request.body);
    reply.send(newPersonal);
  });

  app.get(Path, async (request, response) => {
    const personalData = await PersonalModel.findOne()
      .where({ active: true })
      .exec();
    response.send(personalData);
  });

  app.get<{ Params: { id: string } }>(
    `${Path}/:id`,
    async (request, response) => {
      const personalData = await PersonalModel.findById(
        request.params.id
      ).exec();
      response.send(personalData);
    }
  );

  app.put<{ Params: { id: string } }>(`${Path}/:id`, async (request, reply) => {
    const updatedPersonal = request.body as Partial<PersonalDocument>;
    const newPersonal = await PersonalModel.findByIdAndUpdate(
      request.params.id,
      updatedPersonal,
      { new: true }
    );
    reply.send(newPersonal);
  });

  app.delete<{ Params: { id: string } }>(
    `${Path}/:id`,
    async (request, reply) => {
      await PersonalModel.findByIdAndDelete(request.params.id);
      reply.code(200).send();
    }
  );

  done();
};

export default personal;
