import { useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario";

function App() {
  const [colaborador, setColaborador] = useState();
  return (
    <div className="container">
      <h1 className="text-center">Colaboradores</h1>

      <Formulario colaboradores={colaborador} setColaborador={setColaborador} />
    </div>
  );
}
export default App;
