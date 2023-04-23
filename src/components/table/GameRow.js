import { Button, ButtonGroup, TableCell, TableRow } from "@mui/material";
import { deleteGame } from "../../API/gameServices";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function GameRow({ key, game }) {

  const [showPopup, setShowPopup] = useState(false);

  const removeGameHandler = async (gameId) => {
    console.log(gameId);
    await deleteGame(gameId);
    setShowPopup(true);
    handleClose();
  }

  const handleClickOpen = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Dialog
        open={showPopup}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Game will be removed permanently.
            If you are testing, please create a test game and remove
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>NO</Button>
          <Button onClick={() => removeGameHandler(game._id)} autoFocus>
            YES
          </Button>
        </DialogActions>
      </Dialog>
      <TableRow
        key={game._id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          <img alt={game.title} src={game.imageUrl} width={200} />
        </TableCell>
        <TableCell component="th" scope="row">
          {game.title}
        </TableCell>
        <TableCell align="left">{game.developer}</TableCell>
        <TableCell align="left">{game.description}</TableCell>
        <TableCell align="left">
          <ButtonGroup variant="contained" aria-label="outlined primary button group" >
            <Button
              sx={{ margin: 2 }} variant="contained" color="error" onClick={() => handleClickOpen()}>
              Remove
            </Button>
            <Link to={{
              pathname: `/show-reviews/${game._id}`
            }}>
              <Button sx={{ margin: 2 }} variant="contained" color="success">
                Reviews
              </Button>
            </Link>
          </ButtonGroup>
        </TableCell>
      </TableRow>
    </>
  );
}