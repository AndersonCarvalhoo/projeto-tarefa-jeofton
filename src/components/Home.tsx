import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import "./Home.scss";
import ImagemHome from "../img/ImagemHome.png";

export default function Home() {
  return (
    <>
      <Header />
      <main className="main-home">
        <div className="container-home-info-texto">
          <h1 className="titulo-home">
            Experimente nosso todo list criador de tarefas.
          </h1>
          <span className="span-texto-home">
            Nossa aplicação é um criador de tarefas prático e intuitivo. Com
            ela, você pode cadastrar novas tarefas e acompanhar, em tempo real,
            todas as atividades adicionadas. Ideal para organizar seu dia e
            aumentar sua produtividade!
          </span>
          <Link className="button-criar-tarefas-home" to={"/criartarefas"}>
            Criar tarefas
          </Link>
        </div>
        <div className="container-home-info-image">
          <img
            className="imagem-home"
            src={ImagemHome}
            alt="Imagem de um cara pensativo"
            title="Imagem de um cara pensativo"
          />
        </div>
      </main>
    </>
  );
}
