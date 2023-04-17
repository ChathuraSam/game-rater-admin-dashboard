import { Button, TableCell, TableRow } from "@mui/material";
import { deleteGame } from "../../API/gameServices";
import { useState } from "react";

export default function GameRow({ key, game }) {

  const [showPopup, setShowPopup] = useState(false);

  const removeGameHandler = async (gameId) => {
    console.log(gameId);
    await deleteGame(gameId);
    setShowPopup(true);
  }

  return (
    <>
    <TableRow
      key={key}
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
        <Button variant="contained" color="error" onClick={() => removeGameHandler(game._id)}>
          Remove
        </Button>
      </TableCell>
    </TableRow>

    {showPopup && (
      <div className="popup">
        <p>Row deleted successfully!</p>
        <button onClick={() => setShowPopup(false)}>Close</button>
      </div>
    )}

    <style jsx>{`
      .popup {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #55efc4;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        z-index: 9999;
      }
    `}</style>
    </>
    

  );
}