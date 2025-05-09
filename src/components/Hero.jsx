// src/components/Hero.jsx
import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.container}>
        <h1 className={styles.title}>
          Novibet Online Καζίνο Ελλάδα – Παίξε Νόμιμα και Ασφαλώς Online
        </h1>
        <p className={styles.subtitle}>
          Η Novibet είναι ένα από τα κορυφαία online καζίνο που λειτουργούν νόμιμα
          στην Ελλάδα και είναι εύκολα προσβάσιμη μέσω ίντερνετ. Με άδεια από την
          ΕΕΕΠ, τεράστια ποικιλία παιχνιδιών και υποστήριξη στα ελληνικά 24/7,
          η Novibet αποτελεί ιδανική επιλογή για αξιοπιστία, ασφάλεια και πραγματική
          ψυχαγωγία στο παιχνίδι με πραγματικά χρήματα.
        </p>
        <a
          href="https://www.novibet.com/casino"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnPrimary}
        >
          Εγγραφή Τώρα
        </a>
      </div>
    </section>
  );
}
