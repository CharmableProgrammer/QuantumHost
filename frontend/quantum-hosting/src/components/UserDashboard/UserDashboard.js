// components/UserDashboard/UserDashboard.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import styles from './UserDashboard.module.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function UserDashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [servers, setServers] = useState([]);
  const [selectedServer, setSelectedServer] = useState(null);
  const [usageData, setUsageData] = useState({ timestamps: [], cpu: [], ram: [] });
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  useEffect(() => {
    // Simulating API call to fetch servers
    const fetchServers = async () => {
      const data = [
        { id: 1, name: 'Minecraft Server', status: 'Online' },
        { id: 2, name: 'CS:GO Server', status: 'Offline' },
        { id: 3, name: 'ARK Server', status: 'Online' },
      ];
      setServers(data);
      if (data.length > 0) setSelectedServer(data[0].id);
    };
    fetchServers();
  }, []);

  useEffect(() => {
    if (selectedServer) {
      // Simulating API call to fetch usage data
      const fetchUsageData = async () => {
        const data = {
          timestamps: ['10:00', '11:00', '12:00', '13:00'],
          cpu: [20, 30, 40, 50],
          ram: [50, 60, 70, 80],
        };
        setUsageData(data);
      };
      fetchUsageData();
    }
  }, [selectedServer]);

  const chartData = {
    labels: usageData.timestamps,
    datasets: [
      {
        label: 'CPU Usage',
        data: usageData.cpu,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'RAM Usage',
        data: usageData.ram,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Server Resource Usage Over Time',
      },
    },
  };

  return (
    <div className={`${styles.dashboard} ${darkMode ? styles.dark
      : ''}`}>
        <button onClick={toggleDarkMode} className={styles.darkModeToggle}>
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        User Dashboard
      </motion.h1>
      <div className={styles.serverSelector}>
        <label htmlFor="serverSelect">Select Server:</label>
        <select 
          id="serverSelect" 
          value={selectedServer} 
          onChange={(e) => setSelectedServer(Number(e.target.value))}
        >
          {servers.map(server => (
            <option key={server.id} value={server.id}>{server.name}</option>
          ))}
        </select>
      </div>
      {selectedServer && (
        <motion.div 
          className={styles.serverDetails}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Server Details</h2>
          <div className={styles.card}>
            <p><strong>Name:</strong> {servers.find(s => s.id === selectedServer)?.name}</p>
            <p><strong>Status:</strong> 
              <span className={servers.find(s => s.id === selectedServer)?.status === 'Online' ? styles.statusOnline : styles.statusOffline}>
                {servers.find(s => s.id === selectedServer)?.status}
              </span>
            </p>
          </div>
          <div className={styles.usageChart}>
            <Line data={chartData} options={chartOptions} />
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default UserDashboard;