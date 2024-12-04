import { Link } from 'react-router-dom';

import React from 'react';

const Nav = () => {
  return (
    <>
      <div>
        <Link to="/Inicio">Inicio</Link>
        <Link to="/pacientes">Ver Listado de Pacientes</Link>
        <Link to="/doctores">Ver Listado de Doctores</Link>
        <Link to="/citas">Ver Citas</Link>
      </div>
    </>
  );
};

export default Nav;
