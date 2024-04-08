import React, { useState } from 'react';
import styles from './LoginForm.module.css';



const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, contrasena: password }),
      });

      if (!response.ok) {
        throw new Error('Inicio de sesión fallido');
      }

      // Si el inicio de sesión es exitoso, redirige al usuario a la página de inicio
      window.location.href = '/home';
    } catch (error) {
      setErrorMessage('Inicio de sesión fallido. Por favor, verifica tu correo electrónico y contraseña.');
    }
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
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
