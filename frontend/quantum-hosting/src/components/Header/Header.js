import React, { useState } from 'react';
import styles from './Header.module.css'

function Header ({ navigate, toggleEncryption, isEncrypted }) {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div 
      className={styles.logo} 
      onClick={() => navigate('home')}
      tabIndex={0} 
      role='button' 
      aria-label='Home'
      >
        Quantum Hosting
      </div>
      <nav className={styles.nav} aria-label="Main Navigation">
        <button 
        className={styles.mobileMenuButton} 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu">
        ☰
        </button>
        <ul className={`${styles.navList} ${isMobileMenuOpen ?
          styles.active : ''} ` }>
          <li><button onClick={() => navigate('home')} aria-label="Home">Home</button></li>
          <li><button onClick={() => navigate('plans')} aria-label="Hosting Plans">Hosting Plans</button></li>
          <li><button onClick={() => navigate('contact-about')} aria-label="Contact and About">Contact & About</button></li>
          <li><button onClick={() => navigate('terms-faq')} aria-label="Terms and FAQ">Terms & FAQ</button></li>
          <li><button onClick={() => navigate('dashboard')} aria-label="User Dashboard">User Dashboard</button></li>
          <li>
            <button onClick={toggleEncryption} aria-label="Toggle Quantum Encryption">
              {isEncrypted ? 'Disable' : 'Enable'} Quantum Encryption
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;