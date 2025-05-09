import React from 'react';
import styles from './ResourcesSection.module.css';

export default function ResourcesSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Πόροι για Καζίνο Live</h2>
      <ul className={styles.list}>
        <li>
          Η <a href="https://www.gamingcommission.gov.gr" target="_blank" rel="noopener noreferrer">ΕΕΕΠ</a> 
          παρέχει πληροφορίες για νόμιμα καζίνο live.
        </li>
        <li>Ιστοσελίδες με αναλυτικές πληροφορίες για παιχνίδια, προσφορές και υπηρεσίες.</li>
        <li>Επικοινωνία απευθείας με τα καζίνο live για επιπλέον πληροφορίες.</li>
        <li>Κοινότητες παικτών για ανταλλαγή εμπειριών και συμβουλές.</li>
      </ul>
    </section>
  );
}
