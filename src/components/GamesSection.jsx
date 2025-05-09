// src/components/GamesSection.jsx
import React from 'react';
import styles from './GamesSection.module.css';

// Импортируем картинки
import slotClassic from '../assets/slot-classic.jpg';
import slotVideo    from '../assets/slot-video.jpg';
import slotMegaways from '../assets/slot-megaways.jpg';
import slotJackpot  from '../assets/slot-jackpot.jpg';

import liveRoulette    from '../assets/live-roulette.jpg';
import liveGameShow    from '../assets/live-gameshow.jpg';
import liveGreekTable  from '../assets/live-greek-table.jpg';

const casinoLink = 'https://www.novibet.com/casino';

export default function GamesSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        Τεράστια Ποικιλία Παιχνιδιών Καζίνο
      </h2>
      <p className={styles.text}>
        Η Novibet διαθέτει μία από τις μεγαλύτερες συλλογές παιχνιδιών online καζίνο
        στην ελληνική αγορά, με περισσότερους από 3.500 τίτλους.
      </p>

      {/* Фρουτάκια */}
      <div className={styles.subsection}>
        <h3 className={styles.subheading}>Φρουτάκια</h3>
        <p className={styles.text}>
          Τα φρουτάκια είναι η καρδιά του καζίνο και στη Novibet θα βρεις:
        </p>
        <div className={styles.cardsGrid}>
          <a href={casinoLink} target="_blank" rel="noopener noreferrer" className={styles.card}>
            <img src={slotClassic} alt="Κλασικά φρουτάκια" className={styles.cardImage}/>
            <div className={styles.cardTitle}>Κλασικά φρουτάκια 3 τροχών</div>
          </a>
          <a href={casinoLink} target="_blank" rel="noopener noreferrer" className={styles.card}>
            <img src={slotVideo} alt="Video slots" className={styles.cardImage}/>
            <div className={styles.cardTitle}>Video slots με εκπληκτικά γραφικά</div>
          </a>
          <a href={casinoLink} target="_blank" rel="noopener noreferrer" className={styles.card}>
            <img src={slotMegaways} alt="Megaways™" className={styles.cardImage}/>
            <div className={styles.cardTitle}>Megaways™ με μεταβλητές γραμμές πληρωμής</div>
          </a>
          <a href={casinoLink} target="_blank" rel="noopener noreferrer" className={styles.card}>
            <img src={slotJackpot} alt="Jackpot slots" className={styles.cardImage}/>
            <div className={styles.cardTitle}>Jackpot φρουτάκια με μεγάλα κέρδη</div>
          </a>
        </div>
      </div>

      {/* Live Καζίνο */}
      <div className={styles.subsection}>
        <h3 className={styles.subheading}>Live Καζίνο</h3>
        <p className={styles.text}>
          Το live καζίνο της Novibet προσφέρει αυθεντική εμπειρία με:
        </p>
        <div className={styles.cardsGrid}>
          <a href={casinoLink} target="_blank" rel="noopener noreferrer" className={styles.card}>
            <img src={liveRoulette} alt="Live Ρουλέτα, Μπλάκτζακ, Μπακαρά" className={styles.cardImage}/>
            <div className={styles.cardTitle}>
              Ρουλέτα, Μπλάκτζακ, Μπακαρά με πραγματικούς ντίλερ
            </div>
          </a>
          <a href={casinoLink} target="_blank" rel="noopener noreferrer" className={styles.card}>
            <img src={liveGameShow} alt="Τηλεπαιχνίδια" className={styles.cardImage}/>
            <div className={styles.cardTitle}>
              Τηλεπαιχνίδια όπως Crazy Time & Monopoly Live
            </div>
          </a>
          <a href={casinoLink} target="_blank" rel="noopener noreferrer" className={styles.card}>
            <img src={liveGreekTable} alt="Ελληνικά τραπέζια" className={styles.cardImage}/>
            <div className={styles.cardTitle}>
              Τραπέζια στα ελληνικά από Evolution & BetGames.TV
            </div>
          </a>
        </div>
      </div>

      {/* Завершающий текст */}
      <p className={`${styles.text} ${styles.finalText}`}>
        Η δημοτικότητα των online casino live στην Ελλάδα αυξάνεται συνεχώς, προσφέροντας
        στους παίκτες την ευκαιρία να απολαύσουν τα οφέλη των ζωντανών καζίνο από την άνεση
        του σπιτιού τους.<br/>
        Τα πλεονεκτήματα του να παίζετε σε ένα casino live στην Ελλάδα περιλαμβάνουν την
        αλληλεπίδραση με πραγματικούς ντίλερ και την καθηλωτική εμπειρία που μιμείται την
        αίσθηση ενός φυσικού καζίνο.<br/>
        Οι πλατφόρμες casino live στην Ελλάδα για το 2025 είναι αδειοδοτημένες και διαθέτουν
        Έλληνες ντίλερ, προσφέροντας μια ποικιλία παιχνιδιών όπως μπλάκτζακ και ρουλέτα.
      </p>
    </section>
  );
}