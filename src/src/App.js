import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/*import NavBar from './Components/NavBar'; // Asegúrate de importar correctamente
import Menu from './Components/Menu';*/
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import Perfil from './Components/Perfil'
import './App.css';
import DuenoForm from './Components/DuenoForm';
import ExpertoForm from './Components/ExpertoForm';
import ProfileDueno from './Components/ProfileDueno';
import ProfileExpert from './Components/ProfileExpert';
import Home from './Components/Home'; 
import Amigos from './Components/Amigos'; // Crea los componentes Amigos, Grupos y Ayuda según tus necesidades
import Grupos from './Components/Grupos';
import Ayuda from './Components/Ayuda';





function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/registroDueno/:id" element={<DuenoForm />} />
          <Route path='/perfil/:id' element={<Perfil/>}/>
          <Route path='/registroexpert/:id' element={<ExpertoForm/>}/>
          <Route path='/perfilDueno/:id'element={<ProfileDueno/>}/>
          <Route path='/perfilExpert/:id' element={<ProfileExpert/>}/>
          <Route path="/amigos" component={Amigos} />
          <Route path="/grupos" component={Grupos} />
          <Route path="/ayuda" component={Ayuda} />


        </Routes> 
      </div>
    </Router>
  );
}

export default App;
