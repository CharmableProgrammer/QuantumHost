import React, { useState } from 'react';
import styles from './ContactAbout.module.css';

function ContactAbout() {
    const [formData, setFormData] = useState({
        name: '', 
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //form data to backend
        console.log('Form submitted', formData);
        //reset form after sumbission 
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className={styles.contactAbout}>
            <section className={styles.about}>
                <h2>About Quantum Hosting</h2>
                <p>
                    Quantum Hosting is at the forefront of game server 
                    technology. Founded in 2020, we've quickly become 
                    a leader in providing high-performance, low-latency game 
                    servers for gamers worldwide.
                </p>
                <p>
                Our mission is to empower gamers and communities by 
                offering cutting-edge server solutions that enhance the 
                gaming experience. With our quantum-powered infrastructure, 
                we ensure that your game servers are always fast, reliable, 
                and secure.
                </p>
                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <h3>50,000+</h3>
                        <p>Active Servers</p>
                    </div>
                    <div className={styles.stat}>
                        <h3>99.9%</h3>
                        <p>Uptime</p>
                    </div>
                    <div className={styles.stat}>
                        <h3>24/7</h3>
                        <p>Support</p>
                    </div>
                </div>
            </section>

            <section className={styles.contact}>
                <h2>Contact Us</h2>
                <p>Have questions or need support? Reach out to us!</p>
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor='name'>Name</label>
                        <input 
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor='email'>Email</label>
                        <input 
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        rewuired
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor='message'>Message</label>
                        <textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        ></textarea>
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        Send Message
                        </button>
                </form>
            </section>
        </div>
    );
}

export default ContactAbout;