import React, { useState, useEffect } from "react";
function Bedel() {
  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
  };

  const navigate = useNavigate();

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
         <h1 style={{ color: 'white' }}>INICIO ADMINISTRADOR BEDEL</h1>
      <button className="btn btn-primary" onClick={() => navigate('/cargarmateria')}>Cargar Materias</button>
      <button className="btn btn-primary" onClick={() => navigate('/cargarcarrera')}>Cargar Carrera</button>
      <button className="btn btn-primary" onClick={() => navigate('/registro')}>Registro</button>
      <button className="btn btn-primary" onClick={() => navigate('/registrobedel')}>Registro bedel</button>
    </div>
  );
}

export default Bedel;