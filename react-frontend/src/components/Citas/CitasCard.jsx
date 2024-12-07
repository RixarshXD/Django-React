import React from 'react';
import { Table } from 'flowbite-react';

const CitasCard = ({ cita }) => {
  return (
    <>
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell>Nombre del Paciente</Table.HeadCell>
            <Table.HeadCell>Fecha de la Cita</Table.HeadCell>
            <Table.HeadCell>Diagnostico</Table.HeadCell>
            <Table.HeadCell>Hora de la cita</Table.HeadCell>
            <Table.HeadCell>Motivo</Table.HeadCell>
            <Table.HeadCell>Observacion</Table.HeadCell>
            <Table.HeadCell>Doctor</Table.HeadCell>
          </Table.Head>

          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {cita.paciente_nombre}
              </Table.Cell>
              <Table.Cell>{cita.fechaCita}</Table.Cell>
              <Table.Cell>{cita.diagnostico}</Table.Cell>
              <Table.Cell>{cita.horaCita}</Table.Cell>
              <Table.Cell>{cita.motivo}</Table.Cell>
              <Table.Cell>{cita.observacion}</Table.Cell>
              <Table.Cell>{cita.doctor_nombre}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <br />
      </div>
    </>
  );
};

export default CitasCard;
