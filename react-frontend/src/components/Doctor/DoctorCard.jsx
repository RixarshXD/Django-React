import React from 'react';

const DoctorCard = ({ doctor }) => {
  return (
    <>
      <div>
        <hr />
        <h1>{doctor.id}</h1>
        <p>{doctor.nombre}</p>
        <p>{doctor.apellido}</p>
        <p>{doctor.rut}</p>
        <p>{doctor.fechaNacimiento}</p>
        <p>{doctor.especialidad}</p>
        <p>{doctor.correo}</p>
        <hr />
      </div>
    </>
  );
};

export default DoctorCard;
