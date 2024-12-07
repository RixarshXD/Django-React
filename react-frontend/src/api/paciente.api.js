import axios from 'axios';

const pacienteApi = axios.create({
  baseURL: 'http://127.0.0.1:8000/citasMedicas/api/v1pacientes/',
});

export const getPacientes = async () => {
  return await pacienteApi.get('/');
};

export const getPaciente = async (id) => {
  return await pacienteApi.get(`/${id}/`);
};

export const createPaciente = async (paciente) => {
  return await pacienteApi.post('/', paciente);
};

export const deletePaciente = async (id) => {
  return await pacienteApi.delete(`/${id}/`);
};

export const updatePaciente = async (id, paciente) => {
  return await pacienteApi.put(`/${id}/`, paciente);
};
