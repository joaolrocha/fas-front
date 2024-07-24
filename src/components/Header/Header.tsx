// src/components/Header/Header.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoFas from '../../assets/logo/logo.png';
import './_header.scss';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <div className="header-component-container">
      <div className="header-component-container-logo">
        <img src={logoFas} alt="logo fas" />
      </div>
      <div className="header-component-container-options">
        <p onClick={() => handleNavigation('/dashboard')}>Inicio</p>
        <p onClick={() => handleNavigation('/listclients')}>Cliente</p>
        <p onClick={() => handleNavigation('/listprojects')}>Projeto</p>
        <p onClick={() => handleNavigation('/resource')}>Recurso</p>
        <p onClick={() => handleNavigation('/projection')}>Projeção</p>
      </div>
      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        &#9776; {/* Unicode for hamburger icon */}
      </div>
      <div className={`mobile-menu ${isMobileMenuOpen ? 'show' : ''}`}>
        <p onClick={() => handleNavigation('/dashboard')}>Inicio</p>
        <p onClick={() => handleNavigation('/listclients')}>Cliente</p>
        <p onClick={() => handleNavigation('/listprojects')}>Projeto</p>
        <p onClick={() => handleNavigation('/resource')}>Recurso</p>
        <p onClick={() => handleNavigation('/projection')}>Projeção</p>
      </div>
    </div>
  );
};

export default Header;


