import React, { useState } from 'react';
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
