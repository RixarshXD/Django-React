import React from 'react';

const PacientesCard = ({ paciente }) => {
  return (
    <>
      <div>
        <hr />
        <h1>{paciente.id}</h1>
        <p>{paciente.nombre}</p>
        <p>{paciente.apellido}</p>
        <p>{paciente.rut}</p>
        <p>{paciente.fechaNacimiento}</p>
        <p>{paciente.correo}</p>
        <hr />
      </div>
    </>
  );
};

export default PacientesCard;
