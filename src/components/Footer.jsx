// src/components/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <a href="/">Home</a>
          <a href="/bonus">Bonus</a>
          <a href="/faq">FAQ</a>
          <a
            href="https://www.novibet.com/casino"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register
          </a>
          <a
            href="https://www.novibet.com/casino"
            target="_blank"
            rel="noopener noreferrer"
          >
            Login
          </a>
        </div>
        <div className={styles.social}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
        <div className={styles.copy}>
          © 2025 Novibet. Όλα τα δικαιώματα διατηρούνται.
        </div>
      </div>
    </footer>
  );
}