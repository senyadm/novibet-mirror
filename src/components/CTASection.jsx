import React from 'react';
import styles from './CTASection.module.css';

export default function CTASection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Εγγράψου Σήμερα και Ξεκίνησε με Μπόνους!</h2>
      <p className={styles.text}>
        Αν ψάχνεις για αξιόπιστο, διασκεδαστικό και αποδοτικό online καζίνο, κάνε εγγραφή τώρα
        και λάβε το μπόνους καλωσορίσματος!
      </p>
      <a
        href="https://www.novibet.com/casino"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        Εγγραφή Τώρα
      </a>
    </section>
  );
}
