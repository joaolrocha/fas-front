import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TableComponent, { Column } from "../../components/Table/Table";

export default function ListFeatures() {
  const navigate = useNavigate()
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const rowsPerPage = 7;


  const handleNavigate = () => {
    navigate('/registerclient')
  }


  const titleColumns: (string | { label: string; width?: string })[] = [
    { label: 'ID', width: '0%' },
    { label: 'CNPJ', width: '10%' },
    { label: 'Razão Social', width: '10%' },
    { label: 'Nome Fantasia', width: '10%' },
    { label: 'Telefone', width: '10%' },
    { label: 'Celular', width: '10%' },
    { label: 'Nome do responsavel', width: '10%' },
    { label: 'Email do responsavel', width: '10%' },
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
    <div className="list-features-container">
      <div className="list-features-content">
        <div className="list-features-content-header">
          <h2>Lista de recursos</h2>

          <button className="button-system listfeatures">Cadastrar recursos </button>
        </div>

        <div className="list-features-content-table">
          <TableComponent TableProps={TableProps} />
        </div>
      </div>
    </div>
  )
}