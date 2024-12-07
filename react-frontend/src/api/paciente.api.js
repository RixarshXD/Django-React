import axios from 'axios';

const pacienteApi = axios.create({
  baseURL: 'http://127.0.0.1:8000/citasMedicas/api/v1pacientes/',
});

export const getPacientes = async () => {
  return pacienteApi.get('/');
};

export const getPaciente = async (id) => {
  return pacienteApi.get(`/${id}/`);
};

export const createPaciente = async (paciente) => {
  return pacienteApi.post('/', paciente);
};

export const deletePaciente = async (id) => {
  return pacienteApi.delete(`/${id}/`);
};

export const updatePaciente = async (id, paciente) => {
  return pacienteApi.put(`/${id}/`, paciente);
};
