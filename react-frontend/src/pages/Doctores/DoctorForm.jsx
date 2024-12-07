import React from 'react';
import { useForm } from 'react-hook-form';
import { createDoctor } from '../../api/doctor.api';
import { useNavigate } from 'react-router-dom';

const DoctorForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    await createDoctor(data);
    navigate('/doctores');
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="nombre"
          {...register('nombre', { required: true })}
        />
        {errors.nombre && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="apellido"
          {...register('apellido', { required: true })}
        />
        {errors.apellido && <span>Este campo es requerido</span>}

        <input
          type="number"
          placeholder="rut"
          {...register('rut', { required: true })}
        />
        {errors.rut && <span>Este campo es requerido</span>}

        <input
          type="date"
          placeholder="Fecha de Nacimiento"
          {...register('fechaNacimiento', { required: true })}
        />
        {errors.fechaNacimiento && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="especialidad"
          {...register('especialidad', { required: true })}
        />
        {errors.especialidad && <span>Este campo es requerido</span>}

        <input
          type="email"
          placeholder="correo"
          {...register('correo', { required: true })}
        />
        {errors.correo && <span>Este campo es requerido</span>}

        <button>Guardar</button>
      </form>
    </>
  );
};

export default DoctorForm;
