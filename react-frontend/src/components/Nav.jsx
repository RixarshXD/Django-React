import { Link } from 'react-router-dom';
import { Navbar, Dropdown } from 'flowbite-react';

import React from 'react';

const Nav = () => {
  return (
    <Navbar fluid rounded className="bg-zinc-800 px-4">
      <div className="w-full flex justify-between items-center">
        <Navbar.Brand as={Link} to="/Inicio">
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
            Sistema Médico
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="flex justify-center items-center">
          {/* Inicio */}
          <Navbar.Link
            as={Link}
            to="/Inicio"
            className="text-white hover:text-gray-300 mx-4"
          >
            Inicio
          </Navbar.Link>

          {/* Pacientes Dropdown */}
          <div className="mx-4">
            <Dropdown
              arrowIcon={true}
              inline
              label={<span className="text-white">Pacientes</span>}
            >
              <Dropdown.Item as={Link} to="/pacientes">
                Ver Listado de Pacientes
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/pacientes-registrar">
                Registrar Paciente
              </Dropdown.Item>
            </Dropdown>
          </div>

          {/* Doctores Dropdown */}
          <div className="mx-4">
            <Dropdown
              arrowIcon={true}
              inline
              label={<span className="text-white">Doctores</span>}
            >
              <Dropdown.Item as={Link} to="/doctores">
                Ver Listado de Doctores
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/doctores-registrar">
                Registrar Doctores
              </Dropdown.Item>
            </Dropdown>
          </div>

          {/* Citas Dropdown */}
          <div className="mx-4">
            <Dropdown
              arrowIcon={true}
              inline
              label={<span className="text-white">Citas</span>}
            >
              <Dropdown.Item as={Link} to="/citas">
                Ver Citas
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/citas-registrar">
                Registrar Cita
              </Dropdown.Item>
            </Dropdown>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Nav;
