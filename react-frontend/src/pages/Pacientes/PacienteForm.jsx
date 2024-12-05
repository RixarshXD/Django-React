import React from 'react';
import { useForm } from 'react-hook-form';

// Componente para el formulario de registro de pacientes
const PacienteForm = () => {
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
          type="text"
          placeholder="nombre"
          // register para registrar los campos del formulario
          {...register('nombre', { required: true })}
        />
        {/* mensaje de error */}
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

export default PacienteForm;
