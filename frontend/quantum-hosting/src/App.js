// App.js
import React, { useState, Suspense } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import QuantumEncryption from './components/utils/QuantumEncryption';
import styles from './App.module.css';

// Lazy load components
const Home = React.lazy(() => import('./components/Home/Home'));
const HostingPlans = React.lazy(() => import('./components/HostingPlans/HostingPlans'));
const ContactAbout = React.lazy(() => import('./components/ContactAbout/ContactAbout'));
const TermsFAQ = React.lazy(() => import('./components/TermsFAQ/TermsFAQ'));
const UserDashboard = React.lazy(() => import('./components/UserDashboard/UserDashboard'));
const UserProfile = React.lazy(() => import('./components/UserProfile/UserProfile'));


function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isEncrypted, setIsEncrypted] = useState(false);

  const toggleEncryption = () => {
    setIsEncrypted(!isEncrypted);
    // Simulate encryption/decryption of all data
    QuantumEncryption.toggleEncryption();
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home navigate={setCurrentPage} />;
      case 'plans':
        return <HostingPlans />;
      case 'contact-about':
        return <ContactAbout />;
      case 'terms-faq':
        return <TermsFAQ />;
      case 'dashboard':
        return <UserDashboard />;
        case 'profile':
        return <UserProfile />;
      default:
        return <Home navigate={setCurrentPage} />;
    }
  };

  return (
    <div className={styles.app}>
      <Header navigate={setCurrentPage}
      toggleEncryption={toggleEncryption} isEncrypted={isEncrypted} />
      <main className={styles.main}>
        <Suspense fallback={<div>Loading...</div>}>
          {renderPage()}
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;