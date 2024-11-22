import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
export default function Header() {
  return (
    <header className="header-tarefa">
      <Link to={"/"}>Página inicial</Link>
      <Link to={"/criartarefas"}>Criar tarefas</Link>
    </header>
  );
}
