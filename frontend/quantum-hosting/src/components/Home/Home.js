import React from 'react';
import { motion } from 'framer-motion';
import styles from './Home.module.css';

function Home({ navigate }) {
  const features = [
    {
      icon: "🚀",
      title: "High-Performance Servers",
      description: "Quantum-powered hosting with lightning-fast speeds and 99.9% uptime."
    },
    {
      icon: "🌐",
      title: "Global Network",
      description: "Servers located strategically worldwide for optimal performance."
    },
    {
      icon: "🛡️",
      title: "Advanced Security",
      description: "Military-grade encryption and DDoS protection for your game servers."
    }
  ];

  const gameTypes = [
    "Minecraft", 
    "Counter-Strike", 
    "ARK", 
    "Rust", 
    "Valheim", 
    "7 Days to Die"
  ];

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.heroContent}
        >
          <h1>Quantum Hosting: Next-Level Game Server Hosting</h1>
          <p>Unleash the power of quantum computing for your game servers</p>
          <div className={styles.heroButtons}>
            <button onClick={() => navigate('plans')}>View Plans</button>
            <button onClick={() => navigate('contact-about')}>Contact Us</button>
          </div>
        </motion.div>
      </section>

      <section className={styles.features}>
        <h2>Why Choose Quantum Hosting?</h2>
        <div className={styles.featureGrid}>
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className={styles.featureCard}
            >
              <span className={styles.featureIcon}>{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.supportedGames}>
        <h2>Supported Games</h2>
        <div className={styles.gameLogos}>
          {gameTypes.map((game, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.1 }}
              className={styles.gameLogo}
            >
              {game}
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.pricing}>
        <h2>Quick Pricing Overview</h2>
        <div className={styles.pricingCards}>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className={styles.pricingCard}
          >
            <h3>Starter</h3>
            <p className={styles.price}>$9.99/month</p>
            <ul>
              <li>2 GB RAM</li>
              <li>10 Player Slots</li>
              <li>Basic Support</li>
            </ul>
            <button onClick={() => navigate('plans')}>Choose Plan</button>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className={styles.pricingCard}
          >
            <h3>Pro</h3>
            <p className={styles.price}>$19.99/month</p>
            <ul>
              <li>8 GB RAM</li>
              <li>50 Player Slots</li>
              <li>Priority Support</li>
            </ul>
            <button onClick={() => navigate('plans')}>Choose Plan</button>
          </motion.div>
        </div>
      </section>

      <section className={styles.testimonials}>
        <h2>What Our Customers Say</h2>
        <div className={styles.testimonialGrid}>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className={styles.testimonialCard}
          >
            <p>"Best game server hosting I've ever used!"</p>
            <span>- John D., Minecraft Server Admin</span>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className={styles.testimonialCard}
          >
            <p>"Incredible performance and support."</p>
            <span>- Sarah M., CS:GO Community Leader</span>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;