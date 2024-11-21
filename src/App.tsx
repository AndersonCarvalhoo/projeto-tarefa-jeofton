import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoTarefas from "./components/TodoTarefas";
import Home from "./components/Home";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/criartarefas" element={<TodoTarefas />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
