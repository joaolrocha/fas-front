import { useNavigate } from "react-router-dom";
import LayoutDashboard from "../../layouts/LayoutDashboard/LayoutDashboard";

import { useState } from "react";
import TableComponent, { Column } from "../../components/Table/Table";
import './_listProjects.scss';

export default function ListProjects() {

  const navigate = useNavigate()
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const rowsPerPage = 7;


  const handleNavigate = () => {
    navigate('/registerclient')
  }


  const titleColumns: (string | { label: string; width?: string })[] = [
    { label: 'ID', width: '0%' },
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
      format: (value, advertisement) => '-',
      width: '0%',
    },
    {
      label: 'Data anunciada',
      format: (value, advertisement) => '-',
      width: '10%',
    },
    {
      label: 'Data anunciada',
      format: (value, advertisement) => '-',
      width: '10%',
    },
    {
      label: 'Data anunciada',
      format: (value, advertisement) => '-',
      width: '10%',
    },
    {
      label: 'Data anunciada',
      format: (value, advertisement) => '-',
      width: '10%',
    },
    {
      label: 'Data anunciada',
      format: (value, advertisement) => '-',
      width: '10%',
    },
    {
      label: 'Data anunciada',
      format: (value, advertisement) => '-',
      width: '10%',
    },
    {
      label: 'Data anunciada',
      format: (value, advertisement) => '-',
      width: '10%',
    },
    {
      label: 'Data anunciada',
      format: (value, advertisement) => '-',
      width: '10%',
    },
  ];


  const heightTable = "19rem";
  const styleHeader = {
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
  };
  const styleBody = {
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
  };

  const TableProps = {
    titleColumns,
    columns,
    dataTable: [],
    page,
    setPage,
    rowsPerPage,
    totalPages,
    setTotalPages,
    totalItems: 0,
    styleHeader,
    styleBody,
    heightTable,
  };
  return (
    <LayoutDashboard>
      <div className="list-projects-container">
        <div className="list-projects-content">
          <div className="list-projects-content-header">
            <h2>Lista de projetos</h2>
            <button className="button-system listprojects">
              Adicionar projetos
            </button>
          </div>

          <div className="list-projects-content-table">
            <TableComponent TableProps={TableProps} />
          </div>

        </div>
      </div>
    </LayoutDashboard>
  )
}