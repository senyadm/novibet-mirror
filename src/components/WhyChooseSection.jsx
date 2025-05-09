import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import styles from './WhyChooseSection.module.css';

export default function WhyChooseSection() {
  const points = [
    'Νόμιμη και ελεγχόμενη από την ΕΕΕΠ',
    'Μεγάλη ποικιλία παιχνιδιών και περισσότερα live τραπέζια',
    'Συνεργασία με κορυφαίους παρόχους',
    'Καθημερινές προσφορές και VIP επιβραβεύσεις',
    'Γρήγορες πληρωμές και ασφάλεια συναλλαγών',
    'Εξυπηρέτηση στα ελληνικά 24/7',
    'Εξαιρετική εμπειρία παίκτη με άριστη υποστήριξη',
    'Παίξε υπεύθυνα, με δέσμευση στην υπεύθυνη συμμετοχή'
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Γιατί να Επιλέξεις τη Novibet?</h2>
      <ul className={styles.list}>
        {points.map((text, i) => (
          <li key={i}>
            <FaCheckCircle className={styles.icon}/>
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

