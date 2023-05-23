import React, { useState } from "react";
import { BaseColaboradores } from "../data/data";

const Formulario = () => {
  const [BaseColaboradoresColaboradores, setBaseColaboradoresColaboradores] =
    useState(BaseColaboradores);
  const [nombreNuevoCol, setNombre] = useState("");
  const [correoNuevoCol, setCorreo] = useState("");
  const [buscar, setBuscar] = useState("");
  const [contenido] = useState(BaseColaboradores);

  const buscarColaborador = (e) => {
    e.preventDefault();
    const resultado = contenido.filter((item) => {
      return item.nombre.toLowerCase().includes(buscar.toLowerCase());
    });

    setBaseColaboradoresColaboradores(resultado);
  };

  const agregar = (e) => {
    e.preventDefault();
    setBaseColaboradoresColaboradores([
      ...BaseColaboradoresColaboradores,
      {
        id: BaseColaboradores.length + 1,
        nombre: nombreNuevoCol,
        correo: correoNuevoCol,
      },
    ]);
    
  };

  const limpiar = () => {
    document.querySelectorAll('input');
    this.setState({
      itemvalues: [{}]
    });
  }

  const renderColaboradores = () => {
    return BaseColaboradoresColaboradores.map((colaborador) => (
      <li key={colaborador.nombre} onClick={e => e.stopPropagation()}>
        {colaborador.nombre} - {colaborador.correo}{" "}
      </li>
    ));
  };

  return (
    <div className="container-fluid" id="contenedor">
        <div className="row">
            <div className="col-12">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <form className="d-flex" role="search" >
            <input 
              className="form-control me-3"
              type="search"
              id="barra"
              placeholder="Buscar"
              onChange={(e) => setBuscar(e.target.value)}
            />
            <button
              className="btn btn-secondary"
              variant="secondary"
              type="submit"
              onClick={buscarColaborador}
              id="btnbuscar"
            >
              Buscar
            </button>{" "}
          </form>
        </div>
        
      </nav>

      <form>
        <form className="form-group mb-3" controlId="formBasicEmail">
          <label className="form-label">Nombre</label>
          <input
            type="name"
            className="form-control"
            placeholder="Ingresar Nombre"
            onChange={(e) => setNombre(e.target.value)}
          />
        </form>

        <form className="form-group mb-3" controlId="formBasicPassword">
          <label className="form-label">Correo</label>
          <input
          className="form-control"
            type="email"
            placeholder="Ingresar Correo"
            onChange={(e) => setCorreo(e.target.value)}
          />
        </form>

        <button
          variant="secondary"
          className="btn btn-secondary mb-12 col-4"
          type="submit"
          onClick={agregar}
          id="btnform"
        >
          Agregar Colaborador
        </button>
        <button
          variant="secondary"
          className="btn btn-secondary mb-12 col-4"
          type="submit"
          onClick={limpiar}
          id="btnform"
        >
            Limpiar Colaborador
        </button>
      </form>
      <section>
      <div>
        <h2>Listado de Colaboradores</h2>
        <ul className="mt-3">{renderColaboradores()}</ul>
      </div>
      </section>
    </div>
    </div>
    </div>
  );
};

export default Formulario;
