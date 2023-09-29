import React, { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// MÒDULO REGISTRO BEDEL
// REALIZADO POR : IsmaFerrari

const estiloTitulo = {
  color: "white",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
};

function Registrobedel() {

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [carrera, setCarrera] = useState("");

  const Registro = (e) => {
    e.preventDefault();

    axios
      .post(process.env, {
        nombre,
        apellido,
        email,
        contrasena,
      })
      .then((response) => {
        window.alert("Usuario registrado con éxito"); })
      .catch((error) => {
        window.alert("Error al registrar el usuario: " + error.message);
      });
  };

  return (
    
    <div className="container mt-5">
      <h1 style={estiloTitulo}>Registro Bedel</h1>
      <form onSubmit={Registro}>
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

        <div><br /></div>
        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>
        
      </form>
      <div><br /><br></br></div>

    </div>
  );
}

export default Registrobedel;
