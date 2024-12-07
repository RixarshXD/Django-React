import React, { useEffect, useState } from 'react';
import { getDoctores } from '../../api/doctor.api';
import DoctorCard from './DoctorCard';

const PacientesList = () => {
  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    async function getAllDoctor() {
      const res = await getDoctores();
      console.log(res.data);
      setDoctor(res.data);
    }
    getAllDoctor();
  }, []);

  return (
    <>
      <h1>Lista de los Doctores</h1>
      <div>
        {doctor.map((doctor) => {
          return <DoctorCard key={doctor.id} doctor={doctor} />;
        })}
      </div>
    </>
  );
};

export default PacientesList;
