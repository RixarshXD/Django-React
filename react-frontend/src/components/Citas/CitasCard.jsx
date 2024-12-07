import React from 'react';
import { Card, Button } from 'flowbite-react';
import { deleteCita } from '../../api/cita.api';
import { useNavigate } from 'react-router-dom';

const CitasCard = ({ cita }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <Card className="max-w-sm h-full">
        <div className="space-y-2">
          <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
            {cita.paciente_nombre}
          </h5>
          <div className="text-sm space-y-1 text-gray-700 dark:text-gray-400">
            <p>
              <strong>Fecha:</strong> {cita.fechaCita}
            </p>
            <p>
              <strong>Hora:</strong> {cita.horaCita}
            </p>
            <p>
              <strong>Doctor:</strong> {cita.doctor_nombre}
            </p>
            <p>
              <strong>Diagnóstico:</strong> {cita.diagnostico}
            </p>
            <p>
              <strong>Motivo:</strong> {cita.motivo}
            </p>
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-2">
          <Button
            size="xs"
            color="success"
            onClick={() => navigate(`/citas-modify/${cita.id}`)}
          >
            Modificar
          </Button>
          <Button
            size="xs"
            color="failure"
            onClick={async () => {
              if (window.confirm('¿Estás seguro de eliminar esta cita?')) {
                await deleteCita(cita.id);
                navigate('/citas');
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

export default CitasCard;
