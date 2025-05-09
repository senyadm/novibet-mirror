import React from 'react';
import styles from './LiveSection.module.css';

// Game Shows
import crazyTime      from '../assets/crazy-time.jpg';
import monopolyLive   from '../assets/monopoly-live.jpg';
import dreamCatcher   from '../assets/dream-catcher.jpg';

// Επιτραπέζια & Άλλα Παιχνίδια
import videoPoker        from '../assets/video-poker.jpg';
import scratchCards      from '../assets/scratch-cards.jpg';
import slingo            from '../assets/slingo.jpg';
import lightningRoulette from '../assets/lightning-roulette.jpg';
import lightningBaccarat from '../assets/lightning-baccarat.jpg';

// Providers
import netent          from '../assets/netent.png';
import playngo         from '../assets/playngo.png';
import pragmaticPlay   from '../assets/pragmatic-play.png';
import microgaming     from '../assets/microgaming.png';
import evolutionGaming from '../assets/evolution-gaming.png';
import redTiger        from '../assets/red-tiger.png';
import quickspin       from '../assets/quickspin.png';
import bigTimeGaming   from '../assets/big-time-gaming.png';
import sportingbet     from '../assets/sportingbet-logo.png';
import winmasters      from '../assets/winmasters-logo.png';

export default function LiveSection() {
  const liveCasinoLink = 'https://www.novibet.com/live-casino';

  const gameShows = [
    { img: crazyTime,      title: 'Crazy Time' },
    { img: monopolyLive,   title: 'Monopoly Live' },
    { img: dreamCatcher,   title: 'Dream Catcher' },
  ];

  const tableGames = [
    { img: videoPoker,        title: 'Video Poker & κλασικό πόκερ'       },
    { img: scratchCards,      title: 'Scratch cards & Instant Win τίτλοι' },
    { img: slingo,            title: 'Slingo & casual παιχνίδια'          },
    { img: lightningRoulette, title: 'Lightning Roulette'                 },
    { img: lightningBaccarat, title: 'Lightning Baccarat'                 },
  ];

  const providers = [
    netent, playngo, pragmaticPlay, microgaming,
    evolutionGaming, redTiger, quickspin, bigTimeGaming,
    sportingbet, winmasters
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Τι είναι το Live Καζίνο;</h2>
      <p className={styles.text}>
        Το Live Καζίνο είναι μια διαδικτυακή πλατφόρμα που προσφέρει ζωντανά παιχνίδια καζίνο,
        όπου οι παίκτες μπορούν να συμμετέχουν σε πραγματικό χρόνο με άλλους παίκτες και ζωντανούς
        κρουπιέρηδες. Τα νόμιμα καζίνο live στην Ελλάδα προσφέρουν μια ευρεία γκάμα παιχνιδιών,
        συμπεριλαμβανομένων της ρουλέτας, του μπλακτζακ, του μπακαρά και του πόκερ. Οι παίκτες μπορούν
        να επιλέξουν από διάφορους παρόχους λογισμικού και να παίξουν με άδεια από την ΕΕΕΠ. Αυτή η
        εμπειρία προσφέρει την αίσθηση ενός πραγματικού καζίνο, με την άνεση του σπιτιού σας.
      </p>

      <div className={styles.subsection}>
        <h3 className={styles.subheading}>Πλεονεκτήματα του Casino Live</h3>
        <p className={styles.text}>
          Τα πλεονεκτήματα του casino live είναι πολλά και σημαντικά. Πρώτον, προσφέρει την δυνατότητα
          να παίξετε από την άνεση του σπιτιού σας, χωρίς να χρειάζεται να επισκεφθείτε ένα φυσικό καζίνο.
          Δεύτερον, τα online casino προσφέρουν μια ευρεία γκάμα παιχνιδιών, που δεν είναι πάντα διαθέσιμα
          στα φυσικά καζίνο. Τρίτον, τα online casino προσφέρουν διάφορες προσφορές και μπόνους, που μπορούν
          να αυξήσουν τις πιθανότητες σας να κερδίσετε. Τέλος, τα online casino προσφέρουν ασφαλείς και
          αξιόπιστες υπηρεσίες, με την χρήση των τελευταίων τεχνολογιών ασφαλείας, εξασφαλίζοντας ότι οι
          προσωπικές και οικονομικές σας πληροφορίες παραμένουν προστατευμένες.
        </p>
      </div>

      <div className={styles.subsection}>
        <h3 className={styles.subheading}>Game Shows στο Live Καζίνο</h3>
        <div className={styles.cardsGrid}>
          {gameShows.map((game, idx) => (
            <a
              key={idx}
              href={liveCasinoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <img src={game.img} alt={game.title} className={styles.cardImage} />
              <div className={styles.cardTitle}>{game.title}</div>
            </a>
          ))}
        </div>
      </div>

      <div className={styles.subsection}>
        <h3 className={styles.subheading}>Επιτραπέζια & Άλλα Παιχνίδια</h3>
        <div className={styles.cardsGrid}>
          {tableGames.map((game, idx) => (
            <a
              key={idx}
              href={liveCasinoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <img src={game.img} alt={game.title} className={styles.cardImage} />
              <div className={styles.cardTitle}>{game.title}</div>
            </a>
          ))}
        </div>
      </div>

      <div className={styles.subsection}>
        <h3 className={styles.subheading}>Συνεργασίες με Κορυφαίους Παρόχους Λογισμικού</h3>
        <div className={styles.providersGrid}>
          {providers.map((logo, idx) => (
            <a
              key={idx}
              href={liveCasinoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logo} alt="" className={styles.providerLogo} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}