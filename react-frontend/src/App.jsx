import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// pacientes
import PacientePage from './pages/Pacientes/PacientePage';
import PacienteForm from './pages/Pacientes/PacienteForm';

// doctores
import DoctorPage from './pages/Doctores/DoctorPage';
import DoctorForm from './pages/Doctores/DoctorForm';

// citas
import CitaPage from './pages/Citas/CitaPage';
import CitaForm from './pages/Citas/CitaForm';

import Inicio from './pages/Inicio';
import Nav from './components/Nav';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Navigate to="/Inicio" />} />
          <Route path="/Inicio" element={<Inicio />} />

          {/* ruta de los pacientes */}
          <Route path="/pacientes" element={<PacientePage />} />
          <Route path="/pacientes-registrar" element={<PacienteForm />} />

          {/* ruta de los doctores */}
          <Route path="/doctores" element={<DoctorPage />} />
          <Route path="/doctores-registrar" element={<DoctorForm />} />

          {/* ruta de las citas */}
          <Route path="/citas" element={<CitaPage />} />
          <Route path="/citas-registrar" element={<CitaForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
