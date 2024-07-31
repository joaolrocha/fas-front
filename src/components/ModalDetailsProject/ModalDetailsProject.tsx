import React from 'react';
import './_modalDetailsProject.scss';
import { Project } from '../../views/ListProjects/ListProjects';

interface ModalProps {
  project: Project | null;
  onClose: () => void;
}

const ModalDetailsProject: React.FC<ModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>X</button>
        <h2>Project Details</h2>
        <p>ID: {project.id}</p>
        <p>Descrição: {project.descricao}</p>
        <p>Data de Inicio: {project.dataInicio}</p>
        <p>Data de Término: {project.dataTermino}</p>
        <p>Tipo: {project.tipo}</p>
        <p>Cliente: {project.cliente}</p>
        <p>Gerente: {project.gerente}</p>
        <p>Status: {project.status}</p>
      </div>
    </div>
  );
};

export default ModalDetailsProject;
