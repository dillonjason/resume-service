import { FastifyRequest, FastifyReply } from "fastify";
import jwtDecode from "jwt-decode";
import { Group } from "../../utils/auth";
import { validate } from "../../utils/auth/validate";
import { Header } from "../constants/header";
import { Status } from "../constants/status";

export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply
): Promise<void | undefined> {
  try {
    await validate(request);
  } catch (e) {
    console.log(e);
    reply.status(Status.Unauthorized);
    reply.send(new Error("Access denied"));
    return;
  }

  const accessTokenHeader = request.headers[Header.Authorization] as string;
  const [, accessToken] = accessTokenHeader.split(" ");
  const token = jwtDecode<{ groups: Group[] }>(accessToken);

  const userInGroup = token.groups.some((group) =>
    [Group.Admin, Group.Manager].includes(group)
  );

  if (!userInGroup) {
    reply.status(Status.Unauthorized);
    reply.send(new Error("Access denied, user not in group."));
    return;
  }
}
