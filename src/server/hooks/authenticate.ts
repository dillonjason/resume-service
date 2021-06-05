import { FastifyReply, FastifyRequest } from "fastify";

import { authenticateRequest } from "../../utils/auth";
import { Status } from "../constants/status";

export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply
): Promise<void | undefined> {
  try {
    await authenticateRequest(request);
  } catch (e) {
    console.log(e);
    reply.status(Status.Unauthorized);
    reply.send(e);
    return;
  }
}
