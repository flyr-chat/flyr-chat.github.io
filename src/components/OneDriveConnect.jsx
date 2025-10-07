import React, { useEffect, useState } from 'react';
import { checkOneDriveStatus, getOneDriveAuthUrl } from '../api';

export default function OneDriveConnect() {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    checkOneDriveStatus()
      .then(data => setConnected(data.connected))
      .catch(() => setConnected(false));
  }, []);

  const handleConnect = async () => {
    const { url } = await getOneDriveAuthUrl();
    window.location.href = url;
  };

  return (
    <div>
      {connected ? (
        <p>Your OneDrive is connected ✅</p>
      ) : (
        <>
          <p>Your OneDrive is not connected. Some features will be limited.</p>
          <button onClick={handleConnect}>Connect OneDrive</button>
        </>
      )}
    </div>
  );
}
