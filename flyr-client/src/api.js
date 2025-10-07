import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OneDriveConnect from './components/OneDriveConnect';
import OneDriveCallback from './components/OneDriveCallback';
import WordEditor from './components/WordEditor';

export default function App() {
  return (
    <Router>
      <div>
        <h1>Flyr Chat</h1>
        <Routes>
          <Route path="/onedrive/callback" element={<OneDriveCallback />} />
          <Route path="/" element={
            <>
              <OneDriveConnect />
              <WordEditor />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}
