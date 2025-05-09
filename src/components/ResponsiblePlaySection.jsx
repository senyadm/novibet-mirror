import React from 'react';
import styles from './ResponsiblePlaySection.module.css';

export default function ResponsiblePlaySection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Συμβουλές για Ασφαλές Παιχνίδι</h2>
      <ul className={styles.list}>
        <li>Επιλέξτε καζίνο με άδεια από την ΕΕΕΠ και διαβάστε τους όρους πριν ξεκινήσετε.</li>
        <li>Ορίστε έναν προϋπολογισμό και μην ξεπεράσετε το όριό σας.</li>
        <li>Παίξτε υπεύθυνα και μην επιδιώξετε να κερδίσετε πίσω τις απώλειές σας.</li>
        <li>Ζητήστε βοήθεια αν χρειάζεστε και επικοινωνήστε με την υποστήριξη.</li>
      </ul>
    </section>
  );
}
