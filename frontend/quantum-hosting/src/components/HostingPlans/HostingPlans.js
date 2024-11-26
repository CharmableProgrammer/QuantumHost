import React from "react";
import styles from './HostingPlans.module.css';

function HostingPlans() {
    const plans = [
        {
            name: 'Basic',
            price: 9.99,
            features: ['1GB RAM', '10GB SSD Storage', '1 Game Server', 'DDoS Protection', '24/7 Support'],
            recommended: false,
        },
        {
            name: 'Pro',
            price: 19.99,
            features: ['4GB RAM', '50GB SSD Storage', '3 Game Servers', 'DDoS Protection', '24/7 Support', 'Priority Queue'],
            recommended: true,
        },
        {
            name: 'Ultimate',
            price: 39.99,
            features: ['16GB RAM', '200GB SSD Storage', 'Unlimited Game Servers', 'DDoS Protection', '24/7 Support', 'Priority Queue', 'Custom Domain'],
            recommended: false,
        },
    ];

    return (
        <div className={styles.hostingPlans}>
            <h1>Choose Your Ideal Hosting Plan</h1>
            <p className={styles.subtitle}>Powerful plans designed for every gaming need</p>
            <div className={styles.planCards}>
                {plans.map((plan, index) => (
                    <div key={index} className={`${styles.planCard}
                    ${plan.recommended ? styles.recommended : ''}`}>
                        {plan.recommended && <div className=
                            {styles.recommendedBadge}>Most Popular</div>}
                        <h2>{plan.name}</h2>
                        <div className={styles.price}>
                            <span className={styles.currency}>$</span>
                            <span className={styles.amount}>{plan.price}</span>
                            <span className={styles.period}>/mo</span>
                        </div>
                        <ul className={styles.features}>
                            {plan.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                        <button className={styles.selectButton}>Select Plan</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HostingPlans;