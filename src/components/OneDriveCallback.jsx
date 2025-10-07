import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { handleOneDriveCallback } from '../api';

export default function OneDriveCallback() {
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get('code');
    const state = params.get('state');

    if (code) {
      handleOneDriveCallback(code, state)
        .then(() => {
          alert('OneDrive connected successfully!');
          navigate('/');
        })
        .catch(() => {
          alert('Failed to connect OneDrive.');
          navigate('/');
        });
    } else {
      alert('No code found in URL.');
      navigate('/');
    }
  }, [location, navigate]);

  return <p>Connecting to OneDrive...</p>;
}
