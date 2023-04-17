import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import GameRow from './GameRow';


export default function GameTable({games}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 850 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>Image</TableCell>
            <TableCell>Title</TableCell>
            <TableCell align="left">Developer</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {games.map((game) => (
            <GameRow key={game.id} game={game}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}