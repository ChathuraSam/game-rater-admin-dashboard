import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getGameById } from "../API/gameServices";
import { useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { deleteReview, getAllReviews } from "../API/reviewService";

const ShowReviewsPage = () => {
  let { gameId } = useParams();

  const [game, setGame] = useState({});
  const [reviews, setReviews] = useState([]);

  const getGameDetails = async (gameId) => {
    if (gameId) {
      const game = await getGameById(gameId);
      setGame(game);
    }
  };

  const getReviewDetails = async (gameId) => {
    if (gameId) {
      const reviews = await getAllReviews(gameId);
      console.log("Reviews...");
      console.log(reviews);
      setReviews(reviews);
    }
  };

  const handleDeleteReview = async (gameId, reviewId) => {
    await deleteReview(gameId, reviewId);
    console.log(`Review: ${reviewId} for game ${gameId} deleted successfully`);
    await getReviewDetails(gameId);
  };

  useEffect(() => {
    getGameDetails(gameId);
  }, [gameId]);

  useEffect(() => {
    getReviewDetails(gameId);
  }, [gameId]);

  return (
    <Container style={{ display: "flex", justifyContent: "left" }}>
      {game && (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia component="img" image={game.imageUrl} alt={game.title} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {game.title}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {game.developer}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {game.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}

      {reviews && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>User</TableCell>
                <TableCell align="right">Comment</TableCell>
                <TableCell align="right">Location</TableCell>
                <TableCell align="right">Rating</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reviews.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.user}
                  </TableCell>
                  <TableCell align="right">{row.comment}</TableCell>
                  <TableCell align="right">{row.gps}</TableCell>
                  <TableCell align="right">{row.starRating}</TableCell>
                  <TableCell align="right">
                    <Button
                      sx={{ margin: 2 }}
                      variant="contained"
                      color="error"
                      onClick={() => handleDeleteReview(gameId, row._id)}
                    >
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default ShowReviewsPage;
