import React, { useState } from 'react';
import { fetchRecentDocs } from '../api';

export default function WordEditor() {
  const [recentDocs, setRecentDocs] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadRecentDocs = async () => {
    setLoading(true);
    try {
      const data = await fetchRecentDocs();
      setRecentDocs(data.documents || []);
    } catch {
      alert('Failed to fetch recent documents.');
    }
    setLoading(false);
  };

  const openDoc = (doc) => {
    alert(`Open document: ${doc.name} (Functionality to be implemented)`);
    // Implement document fetch & load here
  };

  return (
    <div>
      <button onClick={loadRecentDocs}>Open Recent OneDrive Documents</button>
      {loading && <p>Loading...</p>}
      <ul>
        {recentDocs.map(doc => (
          <li key={doc.id}>
            <button onClick={() => openDoc(doc)}>{doc.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
