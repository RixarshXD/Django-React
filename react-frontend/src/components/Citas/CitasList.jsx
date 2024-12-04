import React, { useEffect, useState } from 'react';
import { getCitas } from '../../api/cita.api';
import CitasCard from './CitasCard';

const CitasList = () => {
  const [cita, setCita] = useState([]);

  useEffect(() => {
    async function getAllCitas() {
      const res = await getCitas();
      console.log(res.data);
      setCita(res.data);
    }
    getAllCitas();
  }, []);

  return (
    <>
      <h1>listado de las citas</h1>
      <div>
        {cita.map((cita) => {
          return <CitasCard key={cita.id} cita={cita} />;
        })}
      </div>
    </>
  );
};

export default CitasList;
