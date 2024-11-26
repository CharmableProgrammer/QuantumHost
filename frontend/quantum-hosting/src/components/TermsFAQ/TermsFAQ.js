import React, { useState } from 'react';
import styles from './TermsFAQ.module.css';

function TermsFAQ() {
    const [activeTab, setActiveTab] = useState('terms');
    const [openFAQ, setOpenFAQ] = useState(null);

    const faqs = [
        {
            question: "What games do you support?",
            answer: "We support a wide range of popular games including Minecraft, Counter-Strike: Global Offensive, ARK: Survival Evolved, and many more. Check our game list for a full overview."
        },
        {
            question: "How do I set up my game server?",
            answer: "After purchasing a plan, you'll receive login details for our control panel. From there, you can easily install your chosen game with just a few clicks and start configuring your server."
        },
        {
            question: "What kind of support do you offer?",
            answer: "We offer 24/7 customer support via ticket system and live chat. Our knowledgeable staff is always ready to assist you with any technical issues or questions you may have."
        },
        {
            question: "Can I upgrade my plan later?",
            answer: "Absolutely! You can upgrade your plan at any time. The process is seamless and your data will be transferred to the new, more powerful server automatically."
        },
        {
            question: "What is your uptime guarantee?",
            answer: "We guarantee a 99.9% uptime for all our servers. In the rare event that we don't meet this guarantee, you'll be eligible for service credits as outlined in our Service Level Agreement."
        }
    ];

    const toggleFAQ = (index) => {
        if (openFAQ === index) {
            setOpenFAQ(null);
        } else {
            setOpenFAQ(index);
        }
    };

    return (
        <div className={styles.termsFAQ}>
            <div className={styles.tabs}>
                <button
                    className={`${styles.tab} ${activeTab === 'terms' ?
                        styles.active : ''} `}
                    onClick={() => setActiveTab('terms')}
                >
                    Terms of Service
                </button>
                <button className={`${styles.tab} ${activeTab === 'faq'
                    ? styles.active : ''} `}
                    onClick={() => setActiveTab('faq')}
                >
                    FAQ
                </button>
            </div>

            {activeTab === 'terms' && (
                <div className={styles.terms}>
                    <h2>Terms of Service</h2>
                    <p>Last updated: November 20, 2024</p>
                    <h3>1. Acceptance of Terms</h3>
                    <p>By accessing and using Quantum Hosting services,
                        you agree to be bound by these Terms of Service
                        and all applicable laws and regulations. If you
                        do not agree with any part of these terms, you may
                        not use our services.</p>

                    <h3>2. Use of Services</h3>
                    <p>You agree to use Quantum Hosting services
                        only for lawful purposes and in accordance
                        with these Terms of Service. You are prohibited
                        from using the services to violate any laws or
                        regulations.</p>

                    <h3>3. Service Availability and Performance</h3>
                    <p>While we strive to provide 99.9% uptime,
                        we do not guarantee that the services
                        will be uninterrupted, timely, secure,
                        or error-free. We reserve the right to
                        modify, suspend, or discontinue the services
                        at any time without notice.</p>

                    <h3>4. Payment and Refunds</h3>
                    <p>Payment is due at the time of purchase. We offer 
                        a 7-day money-back guarantee for new accounts. 
                        Refunds after this period are at our discretion 
                        and will be prorated for unused service time.</p>

                    <h3>5. Limitation of Liability</h3>
                    <p>Quantum Hosting shall not be liable for 
                        any indirect, incidental, special, consequential 
                        or punitive damages, including without limitation, 
                        loss of profits, data, use, goodwill, or other 
                        intangible losses.</p>

                        {/* more sections */}
                </div>
            )}

            {activeTab === 'faq' && (
                <div className={styles.faq}>
                    <h2>Frequently Asked Questions</h2>
                    {faqs.map((faq, index) => (
                        <div key={index} className={styles.faqItem}>
                            <button
                            className={styles.faqQuestion}
                            onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                <span className={styles.faqIcon}>{openFAQ ===
                                index ? '-' : '+'}</span>
                            </button>
                            {openFAQ === index && (
                                <div className={styles.faqAnswer}>
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default TermsFAQ;