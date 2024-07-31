import { useNavigate } from "react-router-dom";
import LayoutDashboard from "../../layouts/LayoutDashboard/LayoutDashboard";

import { useState } from "react";
import TableComponent, { Column } from "../../components/Table/Table";
import './_listProjects.scss';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PreviewIcon from '@mui/icons-material/Preview';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ModalDetailsProject from "../../components/ModalDetailsProject/ModalDetailsProject";

export interface Project {
  id: number;
  descricao: string;
  dataInicio: string;
  dataTermino: string;
  tipo: string;
  cliente: string;
  gerente: string;
  status: string;
}

export default function ListProjects() {

  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const rowsPerPage = 7;

  const handleNavigate = () => {
    navigate('/registerprojects');
  }


  const handleViewProject = (project: Project) => {
    setSelectedProject(project);
  }

  const handleCloseModal = () => {
    setSelectedProject(null);
  }

  const titleColumns: (string | { label: string; width?: string })[] = [
    { label: 'ID', width: '10%' },
    { label: 'Descrição', width: '10%' },
    { label: 'Data de inicio', width: '10%' },
    { label: 'Data de término', width: '10%' },
    { label: 'Tipo', width: '10%' },
    { label: 'Cliente', width: '10%' },
    { label: 'Gerente', width: '10%' },
    { label: 'Status', width: '10%' },
    { label: 'Ações', width: '10%' },
  ];

  const columns: Column[] = [
    {
      label: 'ID do anúncio',
      format: (value) => value.id,
      width: '10%',
    },
    {
      label: 'Descrição',
      format: (value) => value.descricao,
      width: '10%',
    },
    {
      label: 'Data de inicio',
      format: (value) => value.dataInicio,
      width: '10%',
    },
    {
      label: 'Data de término',
      format: (value) => value.dataTermino,
      width: '10%',
    },
    {
      label: 'Tipo',
      format: (value) => value.tipo,
      width: '10%',
    },
    {
      label: 'Cliente',
      format: (value) => value.cliente,
      width: '10%',
    },
    {
      label: 'Gerente',
      format: (value) => value.gerente,
      width: '10%',
    },
    {
      label: 'Status',
      format: (value) => value.status,
      width: '10%',
    },
    {
      label: 'Ações',
      format: (value) => (
        <div className="table-options-buttons">
          <button className="icons-table preview" onClick={()=> {handleViewProject(value)}}><PreviewIcon /></button>
          <button className="icons-table edit" onClick={() => alert(`Edit ${value.id}`)}><EditIcon /></button>
          <button className="icons-table delete" onClick={() => alert(`Delete ${value.id}`)}><DeleteIcon /></button>
          <button className="icons-table treding" onClick={() => alert(`Projection ${value.id}`)}><TrendingUpIcon /></button>
        </div>
      ),
      width: '10%',
    },
  ];

  const mockData: Project[] = [
    { id: 1, descricao: 'Project 1', dataInicio: '2024-01-01', dataTermino: '2024-12-31', tipo: 'Type A', cliente: 'Client X', gerente: 'Manager 1', status: 'Active' },
    { id: 2, descricao: 'Project 2', dataInicio: '2024-02-01', dataTermino: '2024-11-30', tipo: 'Type B', cliente: 'Client Y', gerente: 'Manager 2', status: 'Completed' },
    { id: 3, descricao: 'Project 3', dataInicio: '2024-03-01', dataTermino: '2024-10-31', tipo: 'Type C', cliente: 'Client Z', gerente: 'Manager 3', status: 'Pending' },
    { id: 4, descricao: 'Project 4', dataInicio: '2024-04-01', dataTermino: '2024-09-30', tipo: 'Type D', cliente: 'Client A', gerente: 'Manager 4', status: 'Active' },
    { id: 5, descricao: 'Project 5', dataInicio: '2024-05-01', dataTermino: '2024-08-31', tipo: 'Type E', cliente: 'Client B', gerente: 'Manager 5', status: 'Completed' },
    { id: 6, descricao: 'Project 6', dataInicio: '2024-06-01', dataTermino: '2024-07-31', tipo: 'Type F', cliente: 'Client C', gerente: 'Manager 6', status: 'Pending' },
    { id: 7, descricao: 'Project 7', dataInicio: '2024-07-01', dataTermino: '2024-06-30', tipo: 'Type G', cliente: 'Client D', gerente: 'Manager 7', status: 'Active' },
  ];

  const TableProps = {
    titleColumns,
    columns,
    dataTable: mockData,
    page,
    setPage,
    rowsPerPage,
    totalPages,
    setTotalPages,
    totalItems: mockData.length,
    styleHeader: {
      color: "var(--Padro-texto-escuro, #333B3E)",
      fontFamily: "New Order",
      fontSize: "0.75rem",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      whiteSpace: "nowrap",
      borderTop: "1px solid #DFE4EC",
      borderBottom: "1px solid #DFE4EC",
      background: "#EDF1F5",
      textAlign: 'center',
      padding: '1rem 0.5rem 1rem 0.5rem'
    },
    styleBody: {
      color: "#100F14",
      fontFamily: "New Order",
      fontSize: "0.75rem",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      cursor: "pointer",
      whiteSpace: "nowrap",
      padding: "1.2rem",
      textAlign: 'center',
    },
    heightTable: "19rem",
  };

  return (
    <LayoutDashboard>
      <div className="list-projects-container">
        <div className="list-projects-content">
          <div className="list-projects-content-header">
            <h2>Lista de projetos</h2>
            <button className="button-system listprojects" onClick={handleNavigate}>
              Adicionar projetos
            </button>
          </div>

          <div className="list-projects-content-table">
            <TableComponent TableProps={TableProps} />
          </div>

          {selectedProject && (
            <ModalDetailsProject project={selectedProject} onClose={handleCloseModal} />
          )}
        </div>
      </div>
    </LayoutDashboard>
  );
}
