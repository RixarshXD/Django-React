import axios from 'axios';

const citaApi = axios.create({
  baseURL: 'http://127.0.0.1:8000/citasMedicas/api/v1cita/',
});

export const getCitas = async () => {
  return await citaApi.get('/');
};

export const getCita = async (id) => {
  return await citaApi.get(`/${id}/`);
};

export const createCita = async (cita) => {
  return await citaApi.post('/', cita);
};

export const deleteCita = async (id) => {
  return await citaApi.delete(`/${id}/`);
};

export const updateCita = async (id, cita) => {
  return await citaApi.put(`/${id}/`, cita);
};
