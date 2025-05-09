import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Логотип */}
        <a href="/" className={styles.logo}>
          <img src={logo} alt="Novibet Logo" />
        </a>

        {/* Бургер и крестик */}
        <button
          className={styles.burger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        {/* Ссылки и кнопки */}
        <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
          <a href="/" onClick={closeMenu}>Home</a>
          <a href="/bonus" onClick={closeMenu}>Bonus</a>
          <a href="/faq" onClick={closeMenu}>FAQ</a>
          <a
            href="https://www.novibet.com/casino"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnRegister}
            onClick={closeMenu}
          >
            Register
          </a>
          <a
            href="https://www.novibet.com/casino"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnLogin}
            onClick={closeMenu}
          >
            Login
          </a>
        </nav>
      </div>
    </header>
);
}
