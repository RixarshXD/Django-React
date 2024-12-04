import axios from 'axios';

export const getPacientes = async () => {
  return axios.get('http://127.0.0.1:8000/citasMedicas/api/v1pacientes/');
};
