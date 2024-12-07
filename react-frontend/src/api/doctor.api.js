import axios from 'axios';

const doctorApi = axios.create({
  baseURL: 'http://127.0.0.1:8000/citasMedicas/api/v1doctor/',
});

export const getDoctor = async () => {
  return doctorApi.get('/');
};

export const createDoctor = async (doctor) => {
  return doctorApi.post('/', doctor);
};
