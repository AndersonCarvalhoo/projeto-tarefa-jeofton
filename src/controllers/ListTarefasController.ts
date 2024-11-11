import { FastifyRequest, FastifyReply } from "fastify";
import { ListTarefasService } from "../services/ListTarefasService";

class ListTarefasController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listCustomersService = new ListTarefasService();

    const tarefas = await listCustomersService.execute();

    reply.send(tarefas);
  }
}

export { ListTarefasController };
