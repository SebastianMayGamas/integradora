import React, { useState } from 'react';
import styles from './ResisterForm.module.css'
import { useNavigate } from 'react-router-dom';
const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [repetir, setRepetir] = useState('');
  const [nombre,setNombre]= useState('');
  const [tipo, setTipo]=useState('');
  let navigate = useNavigate();

  const handleChangeTipo = (e) => {
    setTipo(e.target.value); // Actualiza el estado 'tipo' con el valor seleccionado
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contrasena !== repetir) {
      alert('Las contraseñas no coinciden');
      return;
    }
    // Lógica para enviar datos al backend
    registrarUsuario({nombre, email, contrasena,tipo });
  };


    
  
  const registrarUsuario = (datosUsuario) => {
    const URI = 'http://localhost:8000/create';
  
    fetch(URI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datosUsuario),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la petición');
        }
        return response.json();
      })
      .then(data => {
        console.log('Datos recibidos:', data);
        

        if (data && data.id) {
          console.log('Registro exitoso. ID:', data.id);
          if (tipo == 1){
           navigate(`/registroDueno/${data.id}`);
          } else {
            if (tipo == 2)
            navigate(`/registroexpert/${data.id}`)
          
          }
          if (tipo == 0){
            alert ('seleccione un tipo de usuario')
          }

          
        } else {
          console.error('No se recibió la ID correctamente');
        }
      })
      .catch(error => {
        console.error('Error en la petición:', error.message);
      });
  };
  


  return (
    
    <div className={styles.container}>
     <a href='/'className={styles.link}> regresar al Inicio</a> 
     <div className= {styles.registerConteiner}>
    <form onSubmit={handleSubmit} className={styles.registerform}>
    <h1> PETCARE</h1>
    <h2>Registro</h2>
      <div className={styles.inputGroup}>
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputGroup}>
      <label htmlFor='name'>Nombre</label>
      <input 
      id ='nombre'
      type='text'
      value={nombre}
      onChange={(e)=> setNombre(e.target.value)}
      >
      
      
      </input>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="contrasena">Contraseña:</label>
        <input
          id="contrasena"
          type="password"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="repetir">Repetir Contraseña:</label>
        <input
          id="repetir"
          type="password"
          value={repetir}
          onChange={(e) => setRepetir(e.target.value)}
          required
        />
        <div className={styles.select}>
        <label htmlFor="tipo">Tipo:</label>
            <select
              id="tipo"
              value={tipo}
              onChange={handleChangeTipo}
            >
              <option value='0'>--Escoje una opcion</option>
              <option value="1">Dueño de mascota</option>
              <option value="2">Experto veterinario</option>
            </select>
        </div>
      </div>
      <button type="submit" className={styles.registerbutton}>Registrar</button>
    </form>
    </div>
    </div>
  );
};

export default RegisterForm;
