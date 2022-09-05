/* eslint-disable react/jsx-no-useless-fragment */
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import CircularProgress from '@mui/material/CircularProgress';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core';

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

function TableInvite({ userList, isLoading }) {
  const classes = useStyles();
  return (
    <>
      {isLoading && userList.length === 0 ? (
        <div className="flex h-full w-full mt-8 justify-center items-center">
          <CircularProgress
            size={80}
            thickness={0.7}
            style={{ padding: '7px' }}
          />
        </div>
      ) : (
        <TableContainer classes={{ root: classes.coontainer }} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell classes={{ root: classes.cell }}>
                  EMAIL
                </TableCell>
                <TableCell
                  classes={{ root: classes.cell }}
                >
                  INVITED DATE
                </TableCell>
                <TableCell
                  classes={{ root: classes.cell }}
                >
                  ACTION
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userList.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.role}</TableCell>
                  <TableCell align="right">{row.action}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}

export default TableInvite;
