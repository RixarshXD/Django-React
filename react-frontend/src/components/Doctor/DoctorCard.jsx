import React from 'react';
import { Table } from 'flowbite-react';

const DoctorCard = ({ doctor }) => {
  return (
    <>
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell>Nombre</Table.HeadCell>
            <Table.HeadCell>Apellido</Table.HeadCell>
            <Table.HeadCell>Rut</Table.HeadCell>
            <Table.HeadCell>Fecha de nacimiento</Table.HeadCell>
            <Table.HeadCell>Especialidad</Table.HeadCell>
            <Table.HeadCell>Correo</Table.HeadCell>
          </Table.Head>

          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {doctor.nombre}
              </Table.Cell>
              <Table.Cell>{doctor.apellido}</Table.Cell>
              <Table.Cell>{doctor.rut}</Table.Cell>
              <Table.Cell>{doctor.fechaNacimiento}</Table.Cell>
              <Table.Cell>{doctor.especialidad}</Table.Cell>
              <Table.Cell>{doctor.correo}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <br />
      </div>
    </>
  );
};

export default DoctorCard;
