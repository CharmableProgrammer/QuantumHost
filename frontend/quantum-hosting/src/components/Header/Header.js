import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Header.module.css'

function Header ({ navigate, currentPage }) {
  const navItems = [
    { name: 'Home', key: 'home' },
    { name: 'Hosting Plans', key: 'plans' },
    { name: 'Contact & About', key: 'contact-about' },
    { name: 'Terms & FAQ', key: 'terms-faq' },
    { name: 'Dashboard', key: 'dashboard' },
  ];

  return (
    <header className={styles.header}>
      <motion.div
      className={styles.logo}
      whileHover={{ scale: 1.1 }}
      whiletap={{ scale: 0.9 }}
      onClick={() => navigate('homme')}
      >
        Quantum Hosting
      </motion.div>
      <nav className={styles.nav}>
        {navItems.map((item) => (
          <motion.button 
          key={item.key}
          onClick={() => navigate(item.key)}
          className={currentPage === item.key ? styles.active : ''}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          >
            {item.name}
          </motion.button>
        ))}
      </nav>
    </header>
  );
}

export default Header;