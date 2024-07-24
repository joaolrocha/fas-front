import {
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect } from "react";
import { Loading, NotFoundData } from "../NotFound/NotFound";
import "./_table.scss";

export interface Column {
  label: string;
  format: (value: any, row?: any, rowIndex?: number) => React.ReactNode;
  width: string;
}
export interface TableInterfaceProps {
  titleColumns: (string | { label: string; width?: string })[];
  columns: Column[];
  dataTable: any;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  rowsPerPage: number;
  totalPages: number;
  totalItems: number;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
  styleHeader: any;
  styleBody: any;
  heightTable: string;
  OnClickRow?: (event: any, row: any, rowIndex?: number) => any;
  setSelectedIndex?: React.Dispatch<React.SetStateAction<number>>;
  setcolumnIndex?: React.Dispatch<React.SetStateAction<number>>;
  paddingLeftModified?: string;
  loading?: boolean;
  selectedRow?: number;
}
export interface TableProps {
  TableProps: TableInterfaceProps;
}
function TableComponent({ TableProps }: TableProps) {
  const {
    titleColumns,
    columns,
    dataTable,
    page,
    setPage,
    rowsPerPage,
    totalPages,
    setTotalPages,
    totalItems,
    styleHeader,
    styleBody,
    setSelectedIndex,
    setcolumnIndex,
    OnClickRow,
    paddingLeftModified,
    loading,
    heightTable,
    selectedRow,
  } = TableProps;
  useEffect(() => {
    const total = Math.ceil(totalItems / rowsPerPage);
    const validTotal = isNaN(total) ? 0 : total;
    setTotalPages(validTotal);
  }, [totalItems, rowsPerPage]);

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  // console.log(dataTable, 'caminhõõessss');

  return (
    <>
      <TableContainer id="table-container">
        <Table>
          <TableHead>
            <TableRow>
              {titleColumns.map((column, index) => {
                if (setSelectedIndex !== undefined) setSelectedIndex(index);
                const columnStyle = {
                  width:
                    typeof column === "object" && column.width
                      ? column.width
                      : "auto",
                  paddingLeft:
                    index === 0
                      ? paddingLeftModified !== undefined
                        ? paddingLeftModified
                        : ""
                      : "",
                };
                return (
                  <TableCell
                    key={typeof column === "object" ? column.label : column}
                    style={{ ...columnStyle, ...styleHeader }}
                  >
                    {typeof column === "object" ? column.label : column}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          {loading ? (
            <TableBody>
              <TableRow>
                <TableCell colSpan={titleColumns.length}>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      height: heightTable,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Loading />
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          ) : totalItems === 0 ? (
            <TableBody>
              <TableRow>
                <TableCell
                  colSpan={titleColumns.length}
                  sx={{ height: "100%" }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      height: heightTable,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <NotFoundData />
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <TableBody id="table-container-body">
              {dataTable
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((row: any, rowIndex: any) => {
                  return (
                    <TableRow
                      key={rowIndex}
                      onClick={(event) =>
                        OnClickRow ? OnClickRow(event, row, rowIndex) : null
                      }
                      style={{
                        backgroundColor:
                          selectedRow === rowIndex ? "#C7DDE0" : "",
                      }}
                    >
                      {columns.map((column: any, columnIndex) => {
                        if (setcolumnIndex !== undefined)
                          setcolumnIndex(columnIndex);
                        const columnStyle = {
                          width:
                            typeof column === "object" && column.width
                              ? column.width
                              : "auto",
                        };
                        return (
                          <TableCell
                            key={columnIndex}
                            style={{ ...columnStyle, ...styleBody }}
                          >
                            {typeof column === "object"
                              ? column.format(row, row)
                              : row[column]}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          )}
        </Table>
        <div
          className="container-pagination-table"
          style={{ margin: "4rem 0 0 0" }}
        >
          <Pagination
            id="table-container-pagination"
            count={totalPages}
            page={page + 1}
            shape="rounded"
            onChange={(event, value) => handleChangePage(value - 1)}
            boundaryCount={1}
            siblingCount={0}
            showFirstButton={page > -1}
            showLastButton={page < totalPages}
          />
        </div>
      </TableContainer>



    </>
  );
}

export default TableComponent;
