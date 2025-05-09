import React from 'react';
import styles from './FAQ.module.css';

export default function FAQPage() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Συχνές Ερωτήσεις για το Novibet Καζίνο</h1>

      <section className={styles.faqSection}>
        <details>
          <summary>Είναι η Novibet νόμιμη στην Ελλάδα;</summary>
          <p>
            Ναι, η Novibet λειτουργεί με άδεια από την Ελληνική Επιτροπή Εποπτείας
            και Ελέγχου Παιγνίων (ΕΕΕΠ), συμμορφώνεται με όλους τους ελληνικούς και
            ευρωπαϊκούς κανονισμούς και διαθέτει μόνιμες άδειες από τις αρμόδιες
            αρχές.
          </p>
        </details>

        <details>
          <summary>Είναι ασφαλές να καταθέσω χρήματα στη Novibet;</summary>
          <p>
            Απολύτως. Όλες οι συναλλαγές προστατεύονται με τεχνολογία κρυπτογράφησης
            SSL και συνεργάζεται μόνο με αξιόπιστους παρόχους πληρωμών.
          </p>
        </details>

        <details>
          <summary>Ποια είναι η ελάχιστη κατάθεση;</summary>
          <p>
            Η ελάχιστη κατάθεση συνήθως είναι 10€, αλλά ενδέχεται να διαφέρει
            ελαφρώς ανάλογα με τη μέθοδο πληρωμής.
          </p>
        </details>

        <details>
          <summary>Πώς μπορώ να επικοινωνήσω με την υποστήριξη;</summary>
          <p>
            Μέσω Live Chat, email ή τηλεφώνου. Η εξυπηρέτηση είναι διαθέσιμη 24/7
            στα ελληνικά για να υποστηρίξει κάθε παίκτη.
          </p>
        </details>

        <details>
          <summary>Τι είδους παιχνίδια θα βρω στο καζίνο της Novibet;</summary>
          <p>
            Φρουτάκια, live τραπέζια, επιτραπέζια παιχνίδια, video poker, τηλεπαιχνίδια
            και jackpot slots από κορυφαίους παρόχους.
          </p>
        </details>
      </section>

      <section className={styles.techSection}>
        <h2 className={styles.techHeading}>Τεχνικά Χαρακτηριστικά και Πιστοποιήσεις</h2>
        <div className={styles.techGroup}>
          <h3>Αδειοδότηση & Κανονιστική Συμμόρφωση</h3>
          <ul>
            <li>HGC-000022-LH για διαδικτυακό στοίχημα</li>
            <li>HGC-000023-LH για διαδικτυακά καζίνο</li>
            <li>Άδειες από την ΕΕΕΠ έως Ιούνιο 2028</li>
          </ul>
        </div>
        <div className={styles.techGroup}>
          <h3>Πιστοποιήσεις Λογισμικού & RNG</h3>
          <ul>
            <li>eCOGRA</li>
            <li>GLI (Gaming Laboratories International)</li>
            <li>iTech Labs</li>
          </ul>
        </div>
        <div className={styles.techGroup}>
          <h3>Προστασία Δεδομένων & Κρυπτογράφηση</h3>
          <ul>
            <li>SSL 256-bit encryption</li>
            <li>Συμμόρφωση GDPR</li>
          </ul>
        </div>
      </section>
    </main>
  );
}