import axios from 'axios';

const doctorApi = axios.create({
  baseURL: 'http://127.0.0.1:8000/citasMedicas/api/v1doctor/',
});

export const getDoctores = async () => {
  return doctorApi.get('/');
};

export const getDoctor = async (id) => {
  return doctorApi.get(`/${id}/`);
};

export const createDoctor = async (doctor) => {
  return doctorApi.post('/', doctor);
};

export const deleteDoctor = async (id) => {
  return doctorApi.delete(`/${id}/`);
};

export const updateDoctor = async (id, doctor) => {
  return doctorApi.put(`/${id}/`, doctor);
};
