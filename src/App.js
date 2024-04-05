import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar'; // Asegúrate de importar correctamente
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import Perfil from './Components/Perfil'
import './App.css';
import DuenoForm from './Components/DuenoForm';
import ExpertoForm from './Components/ExpertoForm';
import ProfileDueno from './Components/ProfileDueno';
import ProfileExpert from './Components/ProfileExpert';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/registroDueno/:id" element={<DuenoForm />} />
          <Route path='/perfil/:id' element={<Perfil/>}/>
          <Route path='/registroexpert/:id' element={<ExpertoForm/>}/>
          <Route path='/perfilDueno/:id'element={<ProfileDueno/>}/>
          <Route path='/perfilExpert/:id' element={<ProfileExpert/>}/>
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
