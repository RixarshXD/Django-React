import React, { useEffect, useState } from 'react';
import { getPacientes } from '../../api/paciente.api';
import PacientesCard from './PacientesCard';

const PacientesList = () => {
  const [paciente, setPaciente] = useState([]);

  useEffect(() => {
    async function getAllPacientes() {
      const res = await getPacientes();
      console.log(res.data);
      setPaciente(res.data);
    }
    getAllPacientes();
  }, []);

  return (
    <>
      <h1>Lista de los pacientes</h1>
      <div>
        {paciente.map((paciente) => {
          return <PacientesCard key={paciente.id} paciente={paciente} />;
        })}
      </div>
    </>
  );
};

export default PacientesList;
