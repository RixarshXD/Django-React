import { Link } from 'react-router-dom';

import React from 'react';

const Nav = () => {
  return (
    <>
      <div>
        <Link to="/Inicio">Inicio</Link>
        {/* pacientes */}
        <Link to="/pacientes">Ver Listado de Pacientes</Link>
        <Link to="/pacientes-registrar">Registrar Paciente</Link>

        {/* doctores */}
        <Link to="/doctores">Ver Listado de Doctores</Link>
        <Link to="/doctores-registrar">Registrar Doctores</Link>

        {/* citas */}
        <Link to="/citas">Ver Citas</Link>
        <Link to="/citas-registrar">Registrar Cita</Link>
      </div>
    </>
  );
};

export default Nav;
