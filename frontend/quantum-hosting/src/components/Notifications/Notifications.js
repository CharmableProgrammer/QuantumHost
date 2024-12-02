import React, { useEffect, useState } from "react";
import io from'socket.io-client';
import styles from './Notifications.module.css';

const socket = io('http://localhost:3000/');

function Notifications() {
    const [notifications, setNotifiacations] = useState([]);

    useEffect(() => {
        socket.on('notification', (message) => {
            setNotifiacations((prev) => [...prev, message]);
        });

        return () => socket.off('notification');
    }, []);

    return (
        <div className={styles.notifications}>
            {notifications.map((note, index) => (
                <div key={index} className={styles.notifications}>
                    {note}
                    </div>
            ))}
        </div>
    );
}

export default Notifications;