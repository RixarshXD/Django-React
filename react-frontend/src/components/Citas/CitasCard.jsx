import React from 'react';

const CitasCard = ({ cita }) => {
  return (
    <>
      <div>
        <hr />
        <h1>{cita.id}</h1>
        <p>{cita.fechaCita}</p>
        <p>{cita.diagnostico}</p>
        <p>{cita.horaCita}</p>
        <p>{cita.motivo}</p>
        <p>{cita.observacion}</p>
        <p>{cita.doctor_nombre}</p>
        <p>{cita.paciente_nombre}</p>
        <hr />
      </div>
    </>
  );
};

export default CitasCard;
