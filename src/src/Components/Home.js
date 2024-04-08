// Home.js
import React from 'react';
import NavBar from './NavBar';
import styles from './Home.module.css';
import imagenPost from '../imagenes/ysgy5lzp.png';

function Home() {
  return (
    <div className={styles.homePage}>
      <header>
        <div>
          <h1>¡Bienvenido a tu red social favorita!</h1>
          <p>Conéctate con amigos y comparte momentos especiales</p>
        </div>
      </header>

      <section className={styles.feed}>
      <NavBar /> {/* Aquí se inserta el NavBar */}
        <div className={styles.post}>
          <div className={styles.userInfo}>
            <img src="https://via.placeholder.com/50" alt="User" />
            <span>Carmelita Florinta Mass Chi</span>
          </div>
          <p>¡Hola, mundo! Esta es mi primera publicación en la red social.</p>
          <img src={require('/Users/stacy/Desktop/pet/pet/petcare/src/imagenes/ysgy5lzp.png')} alt="Post" />
          <div className={styles.actions}>
            <button>Me gusta</button>
            <button>Comentar</button>
            <button>Compartir</button>
          </div>
        </div>
        <div className={styles.post}>
          <div className={styles.userInfo}>
            <img src="https://via.placeholder.com/50" alt="User" />
            <span>Nombre de usuario</span>
          </div>
          <p>¡Hola, mundo! Esta es mi primera publicación en la red social.</p>
          <img src="https://via.placeholder.com/400" alt="Post" />
          <div className={styles.actions}>
            <button>Me gusta</button>
            <button>Comentar</button>
            <button>Compartir</button>
          </div>
        </div>
        <div className={styles.post}>
          <div className={styles.userInfo}>
            <img src="https://via.placeholder.com/50" alt="User" />
            <span>Nombre de usuario</span>
          </div>
          <p>¡Hola, mundo! Esta es mi primera publicación en la red social.</p>
          <img src="https://via.placeholder.com/400" alt="Post" />
          <div className={styles.actions}>
            <button>Me gusta</button>
            <button>Comentar</button>
            <button>Compartir</button>
          </div>
        </div>
        {/* Repite este bloque para más publicaciones */}
      </section>

      <footer>
        <p>&copy; 2024 Red Social. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
