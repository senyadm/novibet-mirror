import React from 'react';
import { FaComments, FaEnvelope, FaPhone } from 'react-icons/fa';
import styles from './SupportSection.module.css';

export default function SupportSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Εξυπηρέτηση Πελατών στη Novibet</h2>
      <p className={styles.text}>
        Η Novibet ξεχωρίζει για την ελληνόφωνη υποστήριξή της, διαθέσιμη 24 ώρες το 24ωρο, 7 ημέρες την εβδομάδα.
      </p>
      <div className={styles.grid}>
        <div className={styles.card}>
          <FaComments className={styles.icon}/>
          <h3 className={styles.cardTitle}>Live Chat</h3>
          <p className={styles.cardText}>Στιγμιαία συνομιλία με εκπρόσωπο</p>
        </div>
        <div className={styles.card}>
          <FaEnvelope className={styles.icon}/>
          <h3 className={styles.cardTitle}>Email</h3>
          <p className={styles.cardText}>support@novibet.gr</p>
        </div>
        <div className={styles.card}>
          <FaPhone className={styles.icon}/>
          <h3 className={styles.cardTitle}>Τηλέφωνο</h3>
          <p className={styles.cardText}>+30 211 198 5700</p>
        </div>
      </div>
      <p className={styles.text}>
        Το προσωπικό είναι φιλικό, καταρτισμένο και πρόθυμο να εξυπηρετήσει κάθε σου απορία.
      </p>
    </section>
);
}
