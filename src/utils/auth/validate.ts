import config from "config";
import { FastifyRequest } from "fastify";
import fetch, { Headers } from "node-fetch";

export async function validate(req: FastifyRequest): Promise<void> {
  const authResponse = await fetch(config.get("auth.url"), {
    headers: new Headers(req.headers as Record<string, string>),
  });

  if (!authResponse.ok) {
    throw new Error(authResponse.statusText);
  }
}
