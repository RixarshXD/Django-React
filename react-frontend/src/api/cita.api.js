import axios from 'axios';

const citaApi = axios.create({
  baseURL: 'http://127.0.0.1:8000/citasMedicas/api/v1cita/',
});

export const getCitas = async () => {
  return citaApi.get('/');
};

export const createCita = async (cita) => {
  return citaApi.post('/', cita);
};
