
import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
};

export default App;
