// components/Home/Home.js
import React from 'react';
import styles from './Home.module.css';

function Home({ navigate }) {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Quantum Hosting</h1>
          <h2>Next-Level Game Server Hosting</h2>
          <p>Experience lightning-fast, reliable game servers powered by quantum technology. Host your favorite games with unparalleled performance and security.</p>
          
          <div className={styles.ctaButtons}>
            <button onClick={() => navigate('plans')} className={styles.btnPrimary}>Get Started</button>
            <button onClick={() => navigate('plans')} className={styles.btnSecondary}>View Plans</button>
          </div>
        </div>
        
        <div className={styles.heroImage}>
          <img 
            src="/path-to-server-image.png" 
            alt="Quantum Hosting Servers" 
            className={styles.serverImage}
          />
        </div>
      </div>

      <div className={styles.featuresSection}>
        <h3>Why Choose Quantum Hosting?</h3>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🚀</div>
            <h4>Ultra-Low Latency</h4>
            <p>Quantum-powered servers for minimal ping</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🛡️</div>
            <h4>DDoS Protection</h4>
            <p>Advanced security to keep your servers safe</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>⚙️</div>
            <h4>Easy Management</h4>
            <p>Intuitive control panel for seamless control</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🆘</div>
            <h4>24/7 Support</h4>
            <p>Expert help whenever you need it</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;