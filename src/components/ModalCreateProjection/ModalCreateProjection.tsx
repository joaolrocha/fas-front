import React from 'react';
import './_modalCreateProjection.scss';

interface Project {
  id: number;
  descricao: string;
  dataInicio: string;
  dataTermino: string;
  tipo: string;
  cliente: string;
  gerente: string;
  status: string;
}

interface ModalProps {
  project: Project | null;
  onClose: () => void;
}

const ModalCreateProjection: React.FC<ModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className='modal-projects-header'>
          <h2>Criar projeção para o projeto {project.descricao}</h2>
          <button className="modal-close-button" onClick={onClose}>X</button>
        </div>
        <div className='modal-projects-group1'>
          <div className='modal-projects-group1-id'>
            <h2>ID do projeto</h2>
            <p>{project.id}</p>
          </div>
          <div className='modal-projects-group1-descricao'>
            <h2>Descrição:</h2>
            <p>{project.descricao}</p>
          </div>
        </div>

        <div className='modal-projects-group2'>
          <div className='modal-projects-group2-inicio'>
            <h2>Data de inicio:</h2>
            <p>{project.dataInicio}</p>
          </div>
          <div className='modal-projects-group2-termino'>
            <h2>Data de termino:</h2>
            <p>{project.dataTermino}</p>
          </div>

          <div className='modal-projects-group2-tipo'>
            <h2>Tipo:</h2>
            <p>{project.tipo}</p>
          </div>
          <div className='modal-projects-group2-cliente'>
            <h2>Cliente:</h2>
            <p>{project.cliente}</p>
          </div>
        </div>

        <div className='modal-projects-group3'>
          <div className='modal-projects-group3-gerente'>
            <h2>Gerente:</h2>
            <p>{project.gerente}</p>
          </div>
          <div className='modal-projects-group3-status'>
            <h2>Status:</h2>
            <p>{project.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCreateProjection;
