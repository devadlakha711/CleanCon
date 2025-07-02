import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import StartDrive from './pages/StartDrive';
import DriveStatus from './pages/DriveStatus';
import DriveDetail from './pages/DriveDetail';
import Leaderboard from './pages/Leaderboard';
import Profile from './pages/Profile';
import ReportIssue from './pages/ReportIssue';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gray-50">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/start-drive" element={<StartDrive />} />
            <Route path="/drive-status" element={<DriveStatus />} />
            <Route path="/drive/:id" element={<DriveDetail />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/report-issue" element={<ReportIssue />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
