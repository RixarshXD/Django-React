import axios from 'axios';

const doctorApi = axios.create({
  baseURL: 'http://127.0.0.1:8000/citasMedicas/api/v1doctor/',
});

export const getDoctores = async () => {
  return await doctorApi.get('/');
};

export const getDoctor = async (id) => {
  return await doctorApi.get(`/${id}/`);
};

export const createDoctor = async (doctor) => {
  return await doctorApi.post('/', doctor);
};

export const deleteDoctor = async (id) => {
  return await doctorApi.delete(`/${id}/`);
};

export const updateDoctor = async (id, doctor) => {
  return await doctorApi.put(`/${id}/`, doctor);
};
