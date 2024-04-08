/*import React, { useState } from 'react';
import styles from './NavBar.module.css';
import { IoMenu } from "react-icons/io5";

function NavBar() {
  const [NavBarOpen, setNavBarOpen] = useState(false);

  return (
    <aside className={styles.NavBar}>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/perfil">Perfil</a></li>
              <li><a href="/mascota">Mascota</a></li>
            </ul>
    </aside>
  );
}

export default NavBar;
*/

// NavBar.js
/*import React, { useState } from 'react';
import styles from './NavBar.module.css';
import { IoMenu } from "react-icons/io5";

function NavBar() {
  const [navBarOpen, setNavBarOpen] = useState(false);

  const toggleNavBar = () => {
    setNavBarOpen(!navBarOpen);
  }

  return (
    <nav className={styles.NavBar}>
      <button className={styles.menuButton} onClick={toggleNavBar}>
        <IoMenu />
      </button>
      <ul className={navBarOpen ? styles.navLinksOpen : styles.navLinks}>
        <li><a href="/home">Home</a></li>
        <li><a href="/perfil">Perfil</a></li>
        <li><a href="/mascota">Mascota</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;*/


// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/amigos">Amigos</Link></li>
                <li><Link to="/grupos">Grupos</Link></li>
                <li><Link to="/ayuda">Ayuda</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
