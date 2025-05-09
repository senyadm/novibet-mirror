import React from 'react';
import styles from './SecuritySection.module.css';

export default function SecuritySection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        Ασφάλεια και Αδειοδότηση στη Novibet
      </h2>
      <p className={styles.text}>
        Η Novibet λειτουργεί νόμιμα στην Ελλάδα βάσει άδειας από την Ελληνική
        Επιτροπή Εποπτείας και Ελέγχου Παιγνίων (ΕΕΕΠ). Χρησιμοποιεί τεχνολογία
        SSL 256-bit encryption που προστατεύει προσωπικά και οικονομικά δεδομένα
        σε κάθε συναλλαγή.
      </p>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Μέτρο</th>
            <th>Περιγραφή</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Όρια κατάθεσης και απώλειας</td>
            <td>
              Ο παίκτης μπορεί να θέσει ημερήσια ή εβδομαδιαία όρια για το ποσό
              που καταθέτει ή χάνει, για καλύτερο έλεγχο των εξόδων του.
            </td>
          </tr>
          <tr>
            <td>Αυτοαποκλεισμός</td>
            <td>
              Δυνατότητα προσωρινού ή μόνιμου αποκλεισμού από την πλατφόρμα, εφόσον
              κρίνει ότι χρειάζεται διάλειμμα.
            </td>
          </tr>
          <tr>
            <td>Ειδοποιήσεις για υπερβολικό χρόνο παιχνιδιού</td>
            <td>
              Ειδοποιήσεις (π.χ. e-mail ή pop-up) όταν υπερβαίνετε το χρόνο
              που έχετε θέσει ως όριο.
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
