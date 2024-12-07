import React from 'react';
import { useForm } from 'react-hook-form';
import {
  createPaciente,
  updatePaciente,
  getPaciente,
} from '../../api/paciente.api';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Card, Label, TextInput, Button } from 'flowbite-react';

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
    <div className="min-h-screenp-4">
      <Card className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          {params.id ? 'Modificar Paciente' : 'Nuevo Paciente'}
        </h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="mb-4">
            <Label htmlFor="nombre" value="Nombre" />
            <TextInput
              id="nombre"
              type="text"
              {...register('nombre', { required: true })}
              color={errors.nombre ? 'failure' : 'gray'}
            />
            {errors.nombre && (
              <span className="text-red-500 text-sm">
                Este campo es requerido
              </span>
            )}
          </div>

          <div className="mb-4">
            <Label htmlFor="apellido" value="Apellido" />
            <TextInput
              id="apellido"
              type="text"
              {...register('apellido', { required: true })}
              color={errors.apellido ? 'failure' : 'gray'}
            />
            {errors.apellido && (
              <span className="text-red-500 text-sm">
                Este campo es requerido
              </span>
            )}
          </div>

          <div className="mb-4">
            <Label htmlFor="rut" value="RUT" />
            <TextInput
              id="rut"
              type="text"
              {...register('rut', { required: true })}
              color={errors.rut ? 'failure' : 'gray'}
            />
            {errors.rut && (
              <span className="text-red-500 text-sm">
                Este campo es requerido
              </span>
            )}
          </div>

          <div className="mb-4">
            <Label htmlFor="fechaNacimiento" value="Fecha de Nacimiento" />
            <TextInput
              id="fechaNacimiento"
              type="date"
              {...register('fechaNacimiento', { required: true })}
              color={errors.fechaNacimiento ? 'failure' : 'gray'}
            />
            {errors.fechaNacimiento && (
              <span className="text-red-500 text-sm">
                Este campo es requerido
              </span>
            )}
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <Button color="gray" onClick={() => navigate('/pacientes')}>
              Cancelar
            </Button>
            <Button type="submit">
              {params.id ? 'Actualizar' : 'Guardar'}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default PacienteForm;
