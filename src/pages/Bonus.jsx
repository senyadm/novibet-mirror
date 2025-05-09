import React from 'react';
import {
  FaCcVisa,
  FaCcMastercard,
  FaCreditCard,
  FaWallet,
  FaUniversity,
  FaSyncAlt,
  FaGift,
  FaEnvelope,
  FaStar
} from 'react-icons/fa';
import styles from './Bonus.module.css';

// Welcome bonuses
const welcomeBonuses = [
  'Μπόνους κατάθεσης',
  'Δωρεάν περιστροφές σε επιλεγμένα slots',
  'Προσφορές περιορισμένου χρόνου',
];

// Καθημερινές Προσφορές & VIP Club
import cashbackImg    from '../assets/cashback-programs.jpg';
import reloadImg      from '../assets/reload-bonus.jpg';
import emailOffersImg from '../assets/email-offers.jpg';
import vipRewardsImg  from '../assets/vip-rewards.jpg';

const dailyOffers = [
  { img: cashbackImg,    title: 'Cashback προγράμματα' },
  { img: reloadImg,      title: 'Reload bonus' },
  { img: emailOffersImg, title: 'Προσωποποιημένες προσφορές μέσω email' },
  { img: vipRewardsImg,  title: 'VIP rewards με προσωπικό account manager' },
];

// Deposit Methods
const depositMethods = [
  { icons: [FaCcVisa, FaCcMastercard], title: 'Visa & Mastercard' },
  { icons: [FaCreditCard],              title: 'Paysafecard' },
  { icons: [FaCreditCard],              title: 'Skrill & Neteller' },
  { icons: [FaWallet],                  title: 'Viva Wallet' },
  { icons: [FaUniversity],              title: 'Τραπεζική μεταφορά' },
];

// Withdrawal Times
const withdrawalTimes = [
  { icon: FaWallet,       title: 'Ηλεκτρονικά πορτοφόλια: 0–24 ώρες' },
  { icon: FaCreditCard,   title: 'Κάρτες: 1–3 εργάσιμες ημέρες' },
  { icon: FaUniversity,   title: 'Τράπεζες: 2–4 εργάσιμες ημέρες' },
];

export default function BonusPage() {
  const promoLink = 'https://www.novibet.com/casino/promotions';

  return (
    <main className={styles.page}>
      {/* Welcome Bonuses */}
      <section className={styles.section}>
        <h1 className={styles.heading}>Μπόνους και Ανταμοιβές για Όλους</h1>
        <p className={styles.text}>
          Η Novibet προσφέρει ένα πλούσιο πακέτο καλωσορίσματος για νέους παίκτες,
          μαζί με καθημερινές προσφορές για υφιστάμενα μέλη.
        </p>

        <h2 className={styles.subheading}>Μπόνους Καλωσορίσματος</h2>
        <div className={styles.cardsGrid}>
          {welcomeBonuses.map((title, i) => (
            <a
              key={i}
              href={promoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.cardTitle}>{title}</div>
            </a>
          ))}
        </div>
        <p className={styles.note}>
          Σημείωση: Για τους ακριβείς όρους μπόνους, επισκέψου την επίσημη σελίδα προσφορών της Novibet.
        </p>
      </section>

      {/* Daily Offers with images */}
      <section className={styles.section}>
        <h2 className={styles.subheading}>Καθημερινές Προσφορές & VIP Club</h2>
        <div className={styles.cardsGrid}>
          {dailyOffers.map((item, i) => (
            <a
              key={i}
              href={promoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <img src={item.img} alt={item.title} className={styles.cardImage} />
              <div className={styles.cardTitle}>{item.title}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Deposit Methods */}
      <section className={styles.section}>
        <h2 className={styles.subheading}>Διαθέσιμες Μέθοδοι Κατάθεσης</h2>
        <div className={styles.providersGrid}>
          {depositMethods.map((item, i) => (
            <a
              key={i}
              href={promoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.providerItem}
            >
              <div className={styles.iconGroup}>
                {item.icons.map((Ic, idx) => (
                  <Ic key={idx} className={styles.icon} />
                ))}
              </div>
              <div className={styles.providerLabel}>{item.title}</div>
            </a>
          ))}
        </div>
        <p className={styles.text}>
          Όλες οι συναλλαγές γίνονται με ασφάλεια, χωρίς καθυστερήσεις ή περιττές χρεώσεις.
        </p>
      </section>

      {/* Withdrawal Times */}
      <section className={styles.section}>
        <h2 className={styles.subheading}>Χρόνοι Ανάληψης</h2>
        <div className={styles.cardsGrid}>
          {withdrawalTimes.map((item, i) => {
            const Icon = item.icon;
            return (
              <a
                key={i}
                href={promoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <Icon className={styles.icon} />
                <div className={styles.cardTitle}>{item.title}</div>
              </a>
            );
          })}
        </div>
      </section>
    </main>
  );
}