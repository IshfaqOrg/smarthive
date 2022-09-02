import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core';
// function createData(name, calories, fat, carbs, protein) {
//   return {
//     name, calories, fat, carbs, protein,
//   };
// }

const useStyles = makeStyles({
  coontainer: {
    backgroundColor: '#25292d !important',
    borderRadius: '0px',
    marginTop: '20px',
  },
  cell: {
    borderBottom: '0px',
    fontSize: '12px',
    color: '#d0d2d6',
    padding: '0px 25px',
    height: '38px',
  },
});
const rows = [

  // call create data in here
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),

];

function TableUsers() {
  const classes = useStyles();

  return (
    <TableContainer classes={{ root: classes.coontainer }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell classes={{ root: classes.cell }}>
              NAME
            </TableCell>
            <TableCell
              classes={{ root: classes.cell }}
            >
              EMAIL
            </TableCell>
            <TableCell
              classes={{ root: classes.cell }}
            >
              ROLE
            </TableCell>
            <TableCell
              classes={{ root: classes.cell }}
            >
              STATUS
            </TableCell>
            <TableCell
              classes={{ root: classes.cell }}
            >
              ACTION
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableUsers;
