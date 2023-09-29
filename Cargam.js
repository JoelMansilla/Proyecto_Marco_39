import React, { useState, useEffect } from 'react';

//Realizado por: Joel Mansilla.
//Módulo Cargar materia.

function CargarM() {
  
  const [datos, setDatos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [anioSeleccionado, setAnioSeleccionado] = useState('');
  const [carreraSeleccionada, setCarreraSeleccionada] = useState('');
  const [anios, setAnios] = useState([]); 
  const [carreras, setCarreras] = useState([]); 
  const [datosCarrera, setDatosCarrera] = useState([]); 


  const estiloTitulo = {
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    fontSize: '24px', 
  };

  const obtenerDatosCarrera = async () => {
    try {
      const response = await fetch(process.env.url);
      if (response.ok) {
        const data = await response.json();
        setDatosCarrera(data); 
      } else {
        console.error("Error al obtener los datos de carrera");
      }
    } catch (error) {
      console.error("Error al obtener los datos de carrera:", error);
    }
  };

  const obtenerDatosMateria = async () => {
    try {
      const response = await fetch(process.env.url);
      if (response.ok) {
        const data = await response.json();
        setDatos(data);

        const aniosUnicos = [...new Set(data.map((item) => item.anio))];
        const carrerasUnicas = [...new Set(data.map((item) => item.carrera))];

        setAnios(aniosUnicos);
        setCarreras(carrerasUnicas);
      } else {
        console.error("Error al obtener los datos de materia");
      }
    } catch (error) {
      console.error("Error al obtener los datos de materia:", error);
    }
  };

  useEffect(() => {
    obtenerDatosCarrera();
    obtenerDatosMateria();

  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevaMateria = { nombre, anio: anioSeleccionado, carrera: carreraSeleccionada };
    setDatos([...datos, nuevaMateria]);
    setNombre('');
    setAnioSeleccionado('');
    setCarreraSeleccionada('');

    try {
      await fetch(process.env, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevaMateria),
      });
      obtenerDatosCarrera();

    } catch (error) {
      console.error("Error al guardar los datos de la materia:", error);
    }
  };

  const handleEditar = (index) => {
    const datosEditados = [...datos];
    datosEditados[index] = { nombre, anio: anioSeleccionado, carrera: carreraSeleccionada };
    setDatos(datosEditados);
    setNombre('');
    setAnioSeleccionado('');
    setCarreraSeleccionada('');
    obtenerDatosCarrera();

  };

  const handleEliminar = async (index, id) => {
    try {
      await fetch(process.env, {
        method: "DELETE",
      });
      const materiasActualizadas = [...datos];
      materiasActualizadas.splice(index, 1);
      setDatos(materiasActualizadas);
      obtenerDatosCarrera();

    } catch (error) {
      console.error("Error al eliminar la materia:", error);
    }
  };

  return (
    <div>
          <img
        src="/escu2.png"
        style={{
          width: "700px",
          height: "700px",
          borderRadius: "70%",
        }}
        alt="Logo"
      />
      <h1 style={estiloTitulo}>Cargar Materia</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre de la Materia</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="form-group">
  <label htmlFor="anio">Año</label>
  <select
    className="form-control"
    id="anio"
    value={anioSeleccionado}
    onChange={(e) => setAnioSeleccionado(e.target.value)}
  >
    <option value="">Seleccionar año</option>
    <option value="primero">Primero</option>
    <option value="segundo">Segundo</option>
    <option value="tercero">Tercero</option>
  </select>
</div>
        <div className="form-group">
          <label htmlFor="carrera">Carrera</label>
          <select
            className="form-control"
            id="carrera"
            value={carreraSeleccionada}
            onChange={(e) => setCarreraSeleccionada(e.target.value)}
          >
            <option value="">Seleccionar carrera</option>
            {carreras.map((carreraItem) => (
              <option key={carreraItem} value={carreraItem}>
                {carreraItem}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
      <h2  style={estiloTitulo}>
        Datos de la Materia
      </h2>
      <br></br> <br></br>

      <table  className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Nombre de la Materia</th>
            <th>Año</th>
            <th>Carrera</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {datosCarrera.map((item, index) => (
            <tr key={index}>
              <td>{item.nombre}</td>
              <td>{item.anio}</td>
              <td>{item.carrera}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleEditar(index)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger ml-2"
                  onClick={() => handleEliminar(index, item._id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>

  );
}

export default CargarM;
