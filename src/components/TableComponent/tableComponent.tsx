import { FC } from "react";
import { TableData } from "../../interfaces/table";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

interface Props {
  headers: string[];
  tableData: TableData[];
  onClick: (item: TableData) => void;
}

const TableComponent: FC<Props> = ({ headers, tableData, onClick }) => {
  const handleEditClick = (item: TableData) => {
    onClick(item);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {headers?.map((header: string) => (
                <TableCell align="center">{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.car_id}</TableCell>
                <TableCell align="center">{String(row.instock)}</TableCell>
                <TableCell align="center">{row.hp}</TableCell>
                <TableCell align="center">
                  {row.price} {row.currency}
                </TableCell>
                <TableCell align="center">{row.color}</TableCell>
                <TableCell align="center">
                  <Button variant="text" onClick={() => handleEditClick(row)}>
                    EDIT
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableComponent;
