import axios from 'axios';

export const getCitas = async () => {
  return axios.get('http://127.0.0.1:8000/citasMedicas/api/v1cita/');
};
