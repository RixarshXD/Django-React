import React from 'react';
import { Card, Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { deletePaciente } from '../../api/paciente.api';

const PacientesCard = ({ paciente }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <Card className="max-w-sm h-full">
        <div className="space-y-2">
          <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
            {paciente.nombre} {paciente.apellido}
          </h5>
          <div className="text-sm space-y-1 text-gray-700 dark:text-gray-400">
            <p>
              <strong>Rut:</strong> {paciente.rut}
            </p>
            <p>
              <strong>Nacimiento:</strong> {paciente.fechaNacimiento}
            </p>
            <p>
              <strong>Correo:</strong> {paciente.correo}
            </p>
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-2">
          <Button
            size="xs"
            color="success"
            onClick={() => navigate(`/pacientes-modify/${paciente.id}`)}
          >
            Modificar
          </Button>
          <Button
            size="xs"
            color="failure"
            onClick={async () => {
              if (window.confirm('¿Estás seguro de eliminar este paciente?')) {
                await deletePaciente(paciente.id);
                navigate('/pacientes');
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

export default PacientesCard;
