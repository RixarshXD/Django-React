import React from 'react';
import { Card, Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { deleteDoctor } from '../../api/doctor.api';

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <Card className="max-w-sm h-full">
        <div className="space-y-2">
          <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
            Dr. {doctor.nombre} {doctor.apellido}
          </h5>
          <div className="text-sm space-y-1 text-gray-700 dark:text-gray-400">
            <p>
              <strong>Especialidad:</strong> {doctor.especialidad}
            </p>
            <p>
              <strong>Rut:</strong> {doctor.rut}
            </p>
            <p>
              <strong>Nacimiento:</strong> {doctor.fechaNacimiento}
            </p>
            <p>
              <strong>Correo:</strong> {doctor.correo}
            </p>
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-2">
          <Button
            size="xs"
            color="success"
            onClick={() => navigate(`/doctores-modify/${doctor.id}`)}
          >
            Modificar
          </Button>
          <Button
            size="xs"
            color="failure"
            onClick={async () => {
              if (window.confirm('¿Estás seguro de eliminar este Doctor?')) {
                await deleteDoctor(doctor.id);
                navigate('/doctores');
                window.location.reload();
              }
            }}
          >
            Eliminar
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default DoctorCard;
