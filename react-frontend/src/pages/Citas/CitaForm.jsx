import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getCitas } from '../../api/cita.api';

const CitaForm = () => {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    async function getAllCitas() {
      const res = await getCitas();
      console.log(res.data);
      setCitas(res.data);
    }
    getAllCitas();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // onSubmit para enviar los datos del formulario
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="date"
          placeholder="fechaCita"
          // register para registrar los campos del formulario
          {...register('fechaCita', { required: true })}
        />
        {/* mensaje de error */}
        {errors.fechaCita && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="diagnostico"
          {...register('diagnostico', { required: true })}
        />
        {errors.diagnostico && <span>Este campo es requerido</span>}

        <input
          type="time"
          placeholder="horaCita"
          {...register('horaCita', { required: true })}
        />
        {errors.horaCita && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="motivo"
          {...register('motivo', { required: true })}
        />
        {errors.motivo && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="observacion"
          {...register('observacion', { required: true })}
        />
        {errors.observacion && <span>Este campo es requerido</span>}

        {/* se llena el select con la api del backend */}
        <select
          name="paciente_nombre"
          {...register('paciente_nombre', { required: true })}
        >
          {/* eliminar duplicados */}
          {[...new Set(citas.map((cita) => cita.paciente_nombre))].map(
            (paciente_nombre, index) => (
              <option key={index} value={paciente_nombre}>
                {paciente_nombre}
              </option>
            )
          )}
        </select>
        {errors.paciente_nombre && <span>Este campo es requerido</span>}

        {/* se llena el select con la api del backend */}
        <select
          name="doctor_nombre"
          {...register('doctor_nombre', { required: true })}
        >
          {/* eliminar duplicados */}
          {[...new Set(citas.map((cita) => cita.doctor_nombre))].map(
            (doctor_nombre, index) => (
              <option key={index} value={doctor_nombre}>
                {doctor_nombre}
              </option>
            )
          )}
        </select>

        {errors.doctor_nombre && <span>Este campo es requerido</span>}

        <button>Guardar</button>
      </form>
    </>
  );
};

export default CitaForm;
