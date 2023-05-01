import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(co,details) {
  return {co,...details};
}


export default function MuiDenseTable(props) {
    const rows = [];
    Object.entries(props.percentage).map(co => {
        return rows.push(createData(co[0],co[1]))
      })
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>CO</TableCell>
            <TableCell align="right">User Rate</TableCell>
            <TableCell align="right">Percentage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.co}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                {row.co}
                </TableCell>
                <TableCell align="right">{row['1']+"/"+row['2']}</TableCell>
                <TableCell align="right">{row['0']}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
