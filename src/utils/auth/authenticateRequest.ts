import { FastifyRequest } from "fastify";
import jwtDecode from "jwt-decode";
import { Group } from "../../utils/auth";
import { validate } from "../../utils/auth/validate";
import { Header } from "../../server/constants/header";

export async function authenticateRequest(
  request: FastifyRequest
): Promise<void | undefined> {
  try {
    await validate(request);
  } catch (e) {
    throw new Error("Access denied");
  }

  const accessTokenHeader = request.headers[Header.Authorization] as
    | string
    | undefined;

  if (!accessTokenHeader) {
    throw new Error("Access denied, user not in group.");
  }

  const [, accessToken] = accessTokenHeader.split(" ");
  const token = jwtDecode<{ groups: Group[] }>(accessToken);

  const userInGroup = token.groups.some((group) =>
    [Group.Admin, Group.Manager].includes(group)
  );

  if (!userInGroup) {
    throw new Error("Access denied, user not in group.");
  }
}
