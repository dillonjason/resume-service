import { FastifyPluginCallback } from "fastify";
import fp from "fastify-plugin";
import { processRequest } from "graphql-upload";

declare module "fastify" {
  interface FastifyRequest {
    isMultipart?: true;
  }
}

const gqlUpload: FastifyPluginCallback = (fastify, options, done) => {
  fastify.decorateRequest("multipart", false);

  fastify.addContentTypeParser("multipart", (request, payload, done) => {
    request.isMultipart = true;
    done(null, request);
  });

  fastify.addHook("preValidation", async (request, reply) => {
    console.log(request.isMultipart);
    if (!request.isMultipart) {
      return;
    }

    request.body = await processRequest(request.raw, reply.raw, options);
  });

  done();
};

export const gqlUploadPlugin = fp(gqlUpload);
