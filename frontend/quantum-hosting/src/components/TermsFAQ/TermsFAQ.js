import React, { useState } from 'react';
import styles from './TermsFAQ.module.css';

function TermsFAQ() {
    const [activeTab, setActiveTab] = useState('terms');
    const [openFAQ, setOpenFAQ] = useState(null);
    const [openTerms, setOpenTerms] = useState(null);

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

    const terms = [
        {
            title: "1. Acceptance of Terms", 
            content: "By accessing nd using quantum Hosting services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services."
        },
        {
            title: "2. Use of Services",
            content: "You agree to use Quantum Hosting services only for lawful purposes and in accordance with Terms of Service. You are prohibited from using the services to violate any laws or regulations. This includes, but is not limited to \n\n- Hosting illegal content\n- Engaging in unauthorized access to other systems\n- Distributing malware or viruses\n- Infringing on intellectual property rights"
        }, 
        {
            title: "3. Service Availability and Performance",
            content: "While we strive to provide 99.9% uptime, we do or error-free. We reserve the right to modify, suspend, or discontinue the services at any time without notice. In the event of planned maintenance, we will make reasonable efforts to notify you in advance."
        }, 
        {
            title: "4. Payment and Refunds",
            content: "Payment is due at the time of purchase. We offer a 7-day money-back guarantee for new accounts. Refunds after this period are at our discretion and will be prorated for unused service time. recurring payments will be automatically charged unless canceled before renewal date."
        }, 
        {
            title: "5. limitation of Liability",
            content: "quantum Hosting shall not be liable for any indirect, incidental, special, consequential or punnitive damages, including without limitation, loss of profits, data, ue, goodwill, or other intangible losses. Our total liability for any claim arising from or related to these Terms of Service shall not exceed the amount you paid to us for the applicable services in the past 12 months."
        }, 
        {
            title: "6. Data Protection and Privacy", 
            content: "We are comiited to protecting your privacy and handling your data in accordance with applicable data protection laws. Please refer to our Privace Policy for detailed information on how we collect, use, and protect your personal data."
        }, 
        {
            title: "7. Intellectual Property",
            content: "All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are the exclusive property of Quantum Hosting and are protected by international copyright, trademark, and other intellectual property laws."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const toggleTerms = (index) => {
        setOpenTerms(openTerms === index ? null : index);
    };

    return (
        <div className={styles.termsFAQ}>
            <div className={styles.tabs}>
                <button
                    className={`${styles.tab} ${activeTab === 'terms' ? styles.active : ''}`}
                    onClick={() => setActiveTab('terms')}
                >
                    Terms of Service
                </button>
                <button 
                    className={`${styles.tab} ${activeTab === 'faq' ? styles.active : ''}`}
                    onClick={() => setActiveTab('faq')}
                >
                    FAQ
                </button>
            </div>

            {activeTab === 'terms' && (
                <div className={styles.terms}>
                    <h2>Terms of Service</h2>
                    <p className={styles.lastUpdated}>Last updated: November 20, 2024</p>
                    {terms.map((term, index) => (
                        <div key={index} className={styles.termItem}>
                            <button
                                className={styles.termTitle}
                                onClick={() => toggleTerms(index)}
                            >
                                {term.title}
                                <span className={styles.termIcon}>{openTerms === index ? '−' : '+'}</span>
                            </button>
                            {openTerms === index && (
                                <div className={styles.termContent}>
                                    {term.content.split('\n').map((paragraph, i) => (
                                        <p key={i}>{paragraph}</p>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
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
                                <span className={styles.faqIcon}>{openFAQ === index ? '−' : '+'}</span>
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