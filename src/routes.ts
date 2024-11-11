import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateTarefaController } from "./controllers/CreateTarefaController";
import { ListTarefasController } from "./controllers/ListTarefasController";
import { DeleteTarefaController } from "./controllers/DeleteTarefaController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get(
    "/teste",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return { ok: true };
    }
  );

  fastify.post(
    "/tarefa",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateTarefaController().handle(request, reply);
    }
  );

  fastify.get(
    "/tarefas",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListTarefasController().handle(request, reply);
    }
  );

  fastify.delete(
    "/tarefa",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteTarefaController().handle(request, reply);
    }
  );
}
