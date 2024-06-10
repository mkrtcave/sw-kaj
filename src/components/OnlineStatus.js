import React, { useState, useEffect } from 'react';

const OnlineStatus = () => {
    const [online, setOnline] = useState(navigator.onLine);

    useEffect(() => {
        console.log('asdasdasd?');
        const handleOnline = () => {
            setOnline(true);
            window.alert('Back online');
        };

        const handleOffline = () => {
            setOnline(false);
            window.alert('You are offline');
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return (
        <div>
            {online ? (
                <p>Online</p>
            ) : (
                <p>Offline</p>
            )}
        </div>
    );
};

export default OnlineStatus;
