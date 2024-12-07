import React from 'react';
import { useForm } from 'react-hook-form';
import {
  createPaciente,
  updatePaciente,
  getPaciente,
} from '../../api/paciente.api';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

// Componente para el formulario de registro de pacientes
const PacienteForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const params = useParams();
  const navigate = useNavigate();

  // onSubmit para enviar los datos del formulario
  const onSubmit = handleSubmit(async (data) => {
    // si el id existe, se actualiza el paciente
    if (params.id) {
      await updatePaciente(params.id, data);
      navigate('/pacientes');
      return;
    }
    await createPaciente(data);
    navigate('/pacientes');
  });

  useEffect(() => {
    // si el id existe, se obtienn los datos del paciente
    async function getPacienteById() {
      if (params.id) {
        const res = await getPaciente(params.id);
        setValue('nombre', res.data.nombre);
        setValue('apellido', res.data.apellido);
        setValue('rut', res.data.rut);
        setValue('fechaNacimiento', res.data.fechaNacimiento);
        setValue('correo', res.data.correo);

        console.log(res);
      }
    }
    getPacienteById();
  }, []);

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
