// src/components/LayoutDashboard/LayoutDashboard.tsx
import React from 'react';
import './_layoutDashboard.scss';
import Header from '../../components/Header/Header';

interface LayoutDashboardProps {
  children: React.ReactNode;
}

const LayoutDashboard: React.FC<LayoutDashboardProps> = ({ children }) => {
  return (
    <div className="layout-dashboard-container">
      <Header />
      <div className="layout-dashboard-content">
        {children}
      </div>
    </div>
  );
};

export default LayoutDashboard;
