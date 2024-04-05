import React, { useState } from 'react';
import styles from './LoginForm.module.css'; 

var LoginForm = () => {
  var [email, setEmail] = useState('');
  var [password, setPassword] = useState('');
  var [errorMessage, setErrorMessage] = useState('');

  var handleSubmit = (e) => {
    e.preventDefault();
    console.log('Inicio de sesión con:', email, password);

    // Validacion de correo electronico
    var emailRevisar = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRevisar.test(email)){
      setErrorMessage('por favor, introduce un correo valido');

      return;
    }

    // validacion de contrasena
    if ( password.length<= 11){
      setErrorMessage('La contraseña debe tener 11 caracteres');

      return;
    }

    // Aqui ira si pasa toda la logica si pasa lo anterior

    //limpia el mensaje de error
    setErrorMessage('');

  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <h1> Petcare</h1>
        <h2>Iniciar Sesión</h2>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a href='/register'>Registrarse</a>
        </div>
        <button type="submit" className={styles.loginButton}>Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default LoginForm;
