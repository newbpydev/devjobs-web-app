import { Elysia } from "elysia";
import { Logestic } from "logestic";

const app = new Elysia()
  .use(Logestic.preset("common"))
  .get("/", () => "Hello Elysia")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
