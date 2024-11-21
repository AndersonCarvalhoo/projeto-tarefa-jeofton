import { useEffect, useState, useRef, FormEvent } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { api } from "../services/api";
import "./TodoTarefas.scss";
import Header from "./Header";

interface TarefaProps {
  id: string;
  nome: string;
  descricao: string;
  status: boolean;
  created_at: string;
}

export default function TodoTarefas() {
  const [tarefas, setTarefas] = useState<TarefaProps[]>([]);
  const nomeRef = useRef<HTMLInputElement | null>(null);
  const descricaoRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    loadTarefas();
  }, []);

  async function loadTarefas() {
    const response = await api.get("/tarefas");
    setTarefas(response.data);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!nomeRef.current?.value || !descricaoRef.current?.value) {
      return;
    }

    const response = await api.post("/tarefa", {
      nome: nomeRef.current?.value,
      descricao: descricaoRef.current?.value,
    });

    nomeRef.current.value = "";
    descricaoRef.current.value = "";
    setTarefas((allTarefas) => [...allTarefas, response.data]);
  }

  async function handleDelete(id: string) {
    try {
      await api.delete("/tarefa", {
        params: {
          id,
        },
      });

      const allTarefas = tarefas.filter((tarefa) => tarefa.id !== id);
      setTarefas(allTarefas);
    } catch (err) {
      alert(err);
    }
  }

  return (
    <>
      <Header />
      <div className="container-full">
        <main className="main-tarefas">
          <h1>Crie suas tarefas</h1>

          <form className="form-criar-tarefa" onSubmit={handleSubmit}>
            <div className="container-input-tarefa">
              <label htmlFor="">Tarefa: </label>
              <input
                type="text"
                placeholder="Digite a tarefa"
                className="input-form-tarefa"
                ref={nomeRef}
                required
                maxLength={70}
              />
            </div>
            <div className="container-input-tarefa">
              <label htmlFor="">Descrição: </label>
              <input
                type="text"
                placeholder="Digite a descrição"
                className="input-form-tarefa"
                ref={descricaoRef}
                required
                maxLength={250}
              />
            </div>

            <input
              type="submit"
              value="Criar Tarefa"
              className="button-criar-tarefa"
            />
          </form>

          <section className="section-tarefas">
            {tarefas.map((tarefa) => (
              <article key={tarefa.id} className="container-tarefa">
                <p className="nome-tarefa">{tarefa.nome}</p>
                <p>
                  <span>Descrição: </span> {tarefa.descricao}
                </p>
                <button
                  className="button-sucesso"
                  onClick={() => handleDelete(tarefa.id)}
                >
                  <FiCheckCircle size={20} color="#fff" />
                </button>
              </article>
            ))}
          </section>
        </main>
      </div>
    </>
  );
}
