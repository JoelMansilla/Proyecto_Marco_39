import React, { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


//MODULO REGISTRO USUARIO:
//REALIZADO POR : LEANDRO LINARES SILVA

const estiloTitulo = {
  color: "white",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
};

function Registro() {

    useEffect(() => {
      }, []);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [carrera, setCarrera] = useState("");
  const [condicion, setCondicion] = useState("");

  const Registrarse = (e) => {
    e.preventDefault();

    axios
      .post(process.env, {
        nombre,
        apellido,
        email,
        contrasena,
        carrera,
        condicion,
      })
      .then((response) => {
        window.alert("Usuario registrado con éxito");
        })
      .catch((error) => {
        window.alert("Error al registrar el usuario: " + error.message);
      });
  };

  return (
    <div  className="container mt-5">
      <h1  style={estiloTitulo}>Formulario de Registro</h1>
      <form onSubmit={Registrarse}>
        <div className="form-group">
          <label>Nombre:</label>
          <div><br /></div>

          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Apellido:</label>
          <div><br /></div>

          <input
            type="text"
            className="form-control"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email Institucional:</label>
          <div><br /></div>

          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Contraseña:</label>
          <div><br /></div>

          <input
            type="password"
            className="form-control"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
  <label>Carrera Cursada:</label>
  <div><br /></div>
  <select
    className="form-control"
    value={carrera}
    onChange={(e) => setCarrera(e.target.value)}
    required
  >
    <option value="">Selecciona una carrera</option>
    <option value="DESARROLLO DE SOFTWARE">DESARROLLO DE SOFTWARE</option>
    <option value="ANALISTA FUNCIONAL">ANALISTA FUNCIONAL</option>
    <option value="INFRAESTRUCTURA DE LA TECNOLOGIA DE LA INFORMACION (I.T.I)">INFRAESTRUCTURA DE LA TECNOLOGIA DE LA INFORMACION (I.T.I)</option>
  </select>
</div>

<div className="form-group">
  <label>Condición del Alumno:</label>
  <div><br /></div>
  <select
    className="form-control"
    value={condicion}
    onChange={(e) => setCondicion(e.target.value)}
    required
  >
    <option value="">Selecciona la condición</option>
    <option value="Ingresante">Ingresante</option>
    <option value="Segundo Año">Segundo Año</option>
    <option value="Tercer Año">Tercer Año</option>
  </select>
</div>




        <div><br /></div>
        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>
        
      </form>
      <div><br /><br></br></div>

    </div>
  );
}

export default Registro;
