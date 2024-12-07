import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getCitas, createCita, getCita } from '../../api/cita.api';
import { useNavigate, useParams } from 'react-router-dom';
import { getDoctores } from '../../api/doctor.api';
import { getPacientes } from '../../api/paciente.api';
import {
  Card,
  Label,
  TextInput,
  Select,
  Textarea,
  Button,
} from 'flowbite-react';

const CitaForm = () => {
  const [doctores, setDoctores] = useState([]);
  const [pacientes, setPacientes] = useState([]);

  const [citas, setCitas] = useState([]);

  useEffect(() => {
    async function loadData() {
      const resDoctores = await getDoctores();
      const resPacientes = await getPacientes();
      setDoctores(resDoctores.data);
      setPacientes(resPacientes.data);
    }
    loadData();
  }, []);

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
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  // onSubmit para enviar los datos del formulario
  const onSubmit = handleSubmit(async (data) => {
    // si el id existe, se actualiza la cita
    if (params.id) {
      await createCita(params.id, data);
      navigate('/citas');
      return;
    }
    await createCita(data);
    navigate('/citas');
  });

  useEffect(() => {
    async function getCitaById() {
      if (params.id) {
        const res = await getCita(params.id);
        setValue('fechaCita', res.data.fechaCita);
        setValue('diagnostico', res.data.diagnostico);
        setValue('horaCita', res.data.horaCita);
        setValue('motivo', res.data.motivo);
        setValue('observacion', res.data.observacion);
        setValue('paciente_nombre', res.data.paciente_nombre);
        setValue('doctor_nombre', res.data.doctor_nombre);
        console.log(res);
      }
    }
    getCitaById();
  }, []);

  return (
    <div className="min-h-screen p-4">
      <Card className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          {params.id ? 'Modificar Cita' : 'Nueva Cita'}
        </h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <Label htmlFor="fechaCita" value="Fecha de Cita" />
              <TextInput
                id="fechaCita"
                type="date"
                {...register('fechaCita', { required: true })}
                color={errors.fechaCita ? 'failure' : 'gray'}
              />
              {errors.fechaCita && (
                <span className="text-red-500 text-sm">
                  Este campo es requerido
                </span>
              )}
            </div>

            <div className="mb-4">
              <Label htmlFor="horaCita" value="Hora de Cita" />
              <TextInput
                id="horaCita"
                type="time"
                {...register('horaCita', { required: true })}
                color={errors.horaCita ? 'failure' : 'gray'}
              />
              {errors.horaCita && (
                <span className="text-red-500 text-sm">
                  Este campo es requerido
                </span>
              )}
            </div>

            <div className="mb-4">
              <Label htmlFor="paciente" value="Paciente" />
              <Select
                id="paciente"
                {...register('paciente_nombre', { required: true })}
                color={errors.paciente_nombre ? 'failure' : 'gray'}
              >
                <option value="">Seleccione un paciente</option>
                {pacientes.map((paciente) => (
                  <option key={paciente.id} value={paciente.id}>
                    {paciente.nombre} {paciente.apellido}
                  </option>
                ))}
              </Select>
              {errors.paciente_nombre && (
                <span className="text-red-500 text-sm">
                  Este campo es requerido
                </span>
              )}
            </div>

            <div className="mb-4">
              <Label htmlFor="doctor" value="Doctor" />
              <Select
                id="doctor"
                {...register('doctor_nombre', { required: true })}
                color={errors.doctor_nombre ? 'failure' : 'gray'}
              >
                <option value="">Seleccione un doctor</option>
                {doctores.map((doctor) => (
                  <option key={doctor.id} value={doctor.id}>
                    {doctor.nombre} - {doctor.especialidad}
                  </option>
                ))}
              </Select>
              {errors.doctor_nombre && (
                <span className="text-red-500 text-sm">
                  Este campo es requerido
                </span>
              )}
            </div>
          </div>

          <div>
            <div className="mb-4">
              <Label htmlFor="motivo" value="Motivo" />
              <Textarea
                id="motivo"
                rows={2}
                {...register('motivo', { required: true })}
                color={errors.motivo ? 'failure' : 'gray'}
              />
              {errors.motivo && (
                <span className="text-red-500 text-sm">
                  Este campo es requerido
                </span>
              )}
            </div>

            <div className="mb-4">
              <Label htmlFor="diagnostico" value="Diagnóstico" />
              <Textarea
                id="diagnostico"
                rows={2}
                {...register('diagnostico', { required: true })}
                color={errors.diagnostico ? 'failure' : 'gray'}
              />
              {errors.diagnostico && (
                <span className="text-red-500 text-sm">
                  Este campo es requerido
                </span>
              )}
            </div>

            <div className="mb-4">
              <Label htmlFor="observacion" value="Observación" />
              <Textarea
                id="observacion"
                rows={2}
                {...register('observacion', { required: true })}
                color={errors.observacion ? 'failure' : 'gray'}
              />
              {errors.observacion && (
                <span className="text-red-500 text-sm">
                  Este campo es requerido
                </span>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <Button color="gray" onClick={() => navigate('/citas')}>
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

export default CitaForm;
