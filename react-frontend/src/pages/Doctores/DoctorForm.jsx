import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createDoctor, updateDoctor, getDoctor } from '../../api/doctor.api';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, Label, TextInput, Button } from 'flowbite-react';

const DoctorForm = () => {
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
    // si el id existe, se actualiza el doctor
    if (params.id) {
      await updateDoctor(params.id, data);
      navigate('/doctores');
      return;
    }
    await createDoctor(data);
    navigate('/doctores');
  });

  useEffect(() => {
    async function getDoctorById() {
      if (params.id) {
        const res = await getDoctor(params.id);
        setValue('nombre', res.data.nombre);
        setValue('apellido', res.data.apellido);
        setValue('rut', res.data.rut);
        setValue('fechaNacimiento', res.data.fechaNacimiento);
        setValue('especialidad', res.data.especialidad);
        setValue('correo', res.data.correo);
        console.log(res);
      }
    }
    getDoctorById();
  }, []);

  return (
    <div className="min-h-screen p-4">
      <Card className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          {params.id ? 'Modificar Doctor' : 'Nuevo Doctor'}
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
            <Label htmlFor="especialidad" value="Especialidad" />
            <TextInput
              id="especialidad"
              type="text"
              {...register('especialidad', { required: true })}
              color={errors.especialidad ? 'failure' : 'gray'}
            />
            {errors.especialidad && (
              <span className="text-red-500 text-sm">
                Este campo es requerido
              </span>
            )}
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <Button color="gray" onClick={() => navigate('/doctores')}>
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

export default DoctorForm;
