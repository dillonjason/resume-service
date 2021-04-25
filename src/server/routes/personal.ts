import { FastifyPluginCallback } from "fastify";
import { PersonalModel, PersonalDocument } from "../../data/schema/personal";
import { authenticate } from "../hooks/authenticate";

const Path = "/personal";

const personal: FastifyPluginCallback = (app, options, next) => {
  app.post(
    Path,
    {
      preHandler: authenticate,
    },
    async (request, reply) => {
      const newPersonal = await PersonalModel.create(request.body);
      reply.send(newPersonal);
    }
  );

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

  app.put<{ Params: { id: string }; Body: Partial<PersonalDocument> }>(
    `${Path}/:id`,
    {
      preHandler: authenticate,
    },
    async (request, reply) => {
      const updatedPersonal = request.body;
      const newPersonal = await PersonalModel.findByIdAndUpdate(
        request.params.id,
        updatedPersonal,
        { new: true }
      );
      reply.send(newPersonal);
    }
  );

  app.delete<{ Params: { id: string } }>(
    `${Path}/:id`,
    {
      preHandler: authenticate,
    },
    async (request, reply) => {
      await PersonalModel.findByIdAndDelete(request.params.id);
      reply.code(200).send();
    }
  );

  next();
};

export default personal;
