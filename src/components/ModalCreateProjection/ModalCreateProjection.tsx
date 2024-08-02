import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Project } from '../../views/ListProjects/ListProjects';
import './_modalCreateProjection.scss';


interface ModalProps {
  project: Project | null;
  onClose: () => void;
}

const ModalCreateProjection: React.FC<ModalProps> = ({ project, onClose }) => {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };



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
        <div className='modal-projects-group4'>
          <div className='modal-projects-group4-budget'>
            <h2>Orçamento:</h2>
            <p>{project.budget}</p>
          </div>
          <div className='modal-projects-group4-valueHour'>
            <h2>Valor por hora:</h2>
            <p>{project.valueHour}</p>
          </div>
        </div>

        <div className='modal-projects-group5'>
          <TextField
            id="código"
            label="Código"
            variant="outlined"
            sx={{ width: '100%' }}
          />
          <TextField
            id="descrição projeto"
            label="Descrição"
            variant="outlined"
            multiline={true}
            minRows={3}
            sx={{ width: '100%' }}
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className='footer-create-projection'>
          <button className='button-system salvarprojecao'>Salvar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalCreateProjection;
