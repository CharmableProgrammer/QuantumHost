import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ContactAbout.module.css';

function ContactAbout() {
    const [formData, setFormData] = useState({
        name: '', 
        email: '', 
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [activeTab, setActiveTab] = useState('about');
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        //simulating fetching team members from an api
        const fetchTeamMembers = async () => {
            // in a real scenario, this would be an api call
            const members = [
                { id: 1, name: "Jane Doe", role: "CEO", image: "https://example.com/jane.jpg" },
                { id: 2, name: "John Smith", role: "CTO", image: "https://example.com/john.jpg" },
                { id: 3, name: "Alice Johnson", role: "Lead Developer", image: "https://example.com/alice.jpg" },
            ];
            setTeamMembers(members);    
        };
        fetchTeamMembers();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name] : e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // simulating from submission to backend 
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Form Submitted', formData);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const pageVariants = {
        initial: { opacity: 0, y: 50 },
        in: { opacity: 1, y: 0 },
        out: { opacity: 0, y: -50 }
    };

    return (
        <div className={styles.contactAbout}>
            <motion.div 
                className={styles.tabContainer}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
            >
                <button 
                    className={`${styles.tab} ${activeTab === 'about' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('about')}
                >
                    About Us
                </button>
                <button 
                    className={`${styles.tab} ${activeTab === 'contact' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('contact')}
                >
                    Contact Us
                </button>
            </motion.div>

            <AnimatePresence mode="wait">
                {activeTab === 'about' && (
                    <motion.section 
                        key="about"
                        className={styles.about}
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={pageVariants}
                    >
                        <h2>About Quantum Hosting</h2>
                        <p>
                            Quantum Hosting is at the forefront of game server technology. Founded in 2020, we've quickly become 
                            a leader in providing high-performance, low-latency game servers for gamers worldwide.
                        </p>
                        <p>
                            Our mission is to empower gamers and communities by offering cutting-edge server solutions that enhance the 
                            gaming experience. With our quantum-powered infrastructure, we ensure that your game servers are always fast, reliable, 
                            and secure.
                        </p>
                        <div className={styles.stats}>
                            <motion.div className={styles.stat} whileHover={{ scale: 1.1 }}>
                                <h3>50,000+</h3>
                                <p>Active Servers</p>
                            </motion.div>
                            <motion.div className={styles.stat} whileHover={{ scale: 1.1 }}>
                                <h3>99.9%</h3>
                                <p>Uptime</p>
                            </motion.div>
                            <motion.div className={styles.stat} whileHover={{ scale: 1.1 }}>
                                <h3>24/7</h3>
                                <p>Support</p>
                            </motion.div>
                        </div>
                        <h3>Our Team</h3>
                        <div className={styles.teamGrid}>
                            {teamMembers.map(member => (
                                <motion.div 
                                    key={member.id} 
                                    className={styles.teamMember}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <img src={member.image} alt={member.name} />
                                    <h4>{member.name}</h4>
                                    <p>{member.role}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                )}

                {activeTab === 'contact' && (
                    <motion.section 
                        key="contact"
                        className={styles.contact}
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={pageVariants}
                    >
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
                                    required
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
                            <motion.button 
                                type="submit" 
                                className={styles.submitButton}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Send Message
                            </motion.button>
                        </form>
                        <AnimatePresence>
                            {isSubmitted && (
                                <motion.div 
                                    className={styles.successMessage}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -50 }}
                                >
                                    Thank you for your message! We'll get back to you soon.
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.section>
                )}
            </AnimatePresence>
        </div>
    );
}

export default ContactAbout;