import prismaClient from "../prisma";

interface CreateTarefaProps {
  nome: string;
  descricao: string;
}

class CreateTarefaService {
  async execute({ nome, descricao }: CreateTarefaProps) {
    if (!nome || !descricao) {
      throw new Error("Preencha todos os campos");
    }

    const tarefa = await prismaClient.tarefa.create({
      data: {
        nome,
        descricao,
        status: true,
      },
    });

    return tarefa;
  }
}

export { CreateTarefaService };
