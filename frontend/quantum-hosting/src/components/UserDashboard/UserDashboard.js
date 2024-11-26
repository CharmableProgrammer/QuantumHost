// components/UserDashboard/UserDashboard.js
import React, { useState, useEffect } from 'react';
import styles from './UserDashboard.module.css';
import QuantumEncryption from '../utils/QuantumEncryption';

function UserDashboard() {
  const [servers, setServers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data with improved performance
    const fetchData = async () => {
      setIsLoading(true);
      // Simulate a faster quantum-powered API call
      await new Promise(resolve => setTimeout(resolve, 200));
      const data = [
        { id: 1, name: 'Minecraft Server', status: 'Online', cpu: 45, ram: 60, storage: 30 },
        { id: 2, name: 'CS:GO Server', status: 'Offline', cpu: 0, ram: 0, storage: 25 },
        { id: 3, name: 'ARK Server', status: 'Online', cpu: 80, ram: 75, storage: 65 },
      ];
      setServers(QuantumEncryption.encrypt(data));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const toggleServerStatus = (id) => {
    setServers(prevServers => {
      const decryptedServers = QuantumEncryption.decrypt(prevServers);
      const updatedServers = decryptedServers.map(server => 
        server.id === id 
          ? {...server, status: server.status === 'Online' ? 'Offline' : 'Online'}
          : server
      );
      return QuantumEncryption.encrypt(updatedServers);
    });
  };

  const allocateResources = (id, resource, amount) => {
    setServers(prevServers => {
      const decryptedServers = QuantumEncryption.decrypt(prevServers);
      const updatedServers = decryptedServers.map(server => 
        server.id === id 
          ? {...server, [resource]: Math.min(100, server[resource] + amount)}
          : server
      );
      return QuantumEncryption.encrypt(updatedServers);
    });
  };

  if (isLoading) {
    return <div>Loading dashboard data...</div>;
  }

  const decryptedServers = QuantumEncryption.decrypt(servers);

  return (
    <div className={styles.dashboard}>
      <h1>User Dashboard</h1>
      <div className={styles.overview}>
        <div className={styles.stat}>
          <h3>Total Servers</h3>
          <p>{decryptedServers.length}</p>
        </div>
        <div className={styles.stat}>
          <h3>Online Servers</h3>
          <p>{decryptedServers.filter(server => server.status === 'Online').length}</p>
        </div>
        <div className={styles.stat}>
          <h3>Storage Used</h3>
          <p>{decryptedServers.reduce((total, server) => total + server.storage, 0)}%</p>
        </div>
      </div>
      <div className={styles.serverList}>
        <h2>Your Servers</h2>
        {decryptedServers.map(server => (
          <div key={server.id} className={styles.serverCard}>
            <div className={styles.serverInfo}>
              <h3>{server.name}</h3>
              <p className={server.status === 'Online' ? styles.statusOnline : styles.statusOffline}>
                {server.status}
              </p>
            </div>
            <div className={styles.serverResources}>
              <div className={styles.resource}>
                <label>CPU</label>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{width: `${server.cpu}%`}}></div>
                </div>
                <span>{server.cpu}%</span>
              </div>
              <div className={styles.resource}>
                <label>RAM</label>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{width: `${server.ram}%`}}></div>
                </div>
                <span>{server.ram}%</span>
              </div>
              <div className={styles.resource}>
                <label>Storage</label>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{width: `${server.storage}%`}}></div>
                </div>
                <span>{server.storage}%</span>
              </div>
            </div>
            <div className={styles.serverActions}>
              <button onClick={() => toggleServerStatus(server.id)}>
                {server.status === 'Online' ? 'Stop Server' : 'Start Server'}
              </button>
              <button onClick={() => allocateResources(server.id, 'cpu', 10)}>Boost CPU</button>
              <button onClick={() => allocateResources(server.id, 'ram', 10)}>Increase RAM</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserDashboard;