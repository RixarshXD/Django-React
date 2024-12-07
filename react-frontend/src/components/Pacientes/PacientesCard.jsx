import React from 'react';
import { Table, Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { deletePaciente } from '../../api/paciente.api';

const PacientesCard = ({ paciente }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="overflow-x-auto ">
        <Table>
          <Table.Head>
            <Table.HeadCell>Nombre</Table.HeadCell>
            <Table.HeadCell>Apellido</Table.HeadCell>
            <Table.HeadCell>Rut</Table.HeadCell>
            <Table.HeadCell>Fecha de nacimiento</Table.HeadCell>
            <Table.HeadCell>Correo</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
          </Table.Head>

          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {paciente.nombre}
              </Table.Cell>
              <Table.Cell>{paciente.apellido}</Table.Cell>
              <Table.Cell>{paciente.rut}</Table.Cell>
              <Table.Cell>{paciente.fechaNacimiento}</Table.Cell>
              <Table.Cell>{paciente.correo}</Table.Cell>
              <Table.Cell>
                <Button
                  color="success"
                  size="sm"
                  onClick={() => navigate(`/pacientes-modify/${paciente.id}`)}
                >
                  Modificar
                </Button>
              </Table.Cell>
              <Table.Cell>
                {/* boton para eliminar al paciente y refrescar la pagina */}
                <Button
                  color="failure"
                  size="sm"
                  onClick={async () => {
                    const res = window.confirm(
                      '¿Estás seguro de eliminar este paciente?'
                    );
                    if (res) {
                      await deletePaciente(paciente.id);
                      navigate('/pacientes');
                      window.location.reload();
                      alert('Paciente eliminado');
                    }
                  }}
                >
                  Eliminar
                </Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <br />
      </div>
    </>
  );
};

export default PacientesCard;
