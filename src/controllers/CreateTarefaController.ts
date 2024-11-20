import { FastifyRequest, FastifyReply } from "fastify";
import { CreateTarefaService } from "../services/CreateTarefaService";

class CreateTarefaController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { nome, descricao } = request.body as {
      nome: string;
      descricao: string;
    };

    const tarefaService = new CreateTarefaService();
    const tarefa = await tarefaService.execute({ nome, descricao });

    reply.send(tarefa);
  }
}

export { CreateTarefaController };
