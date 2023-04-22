import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';
import { useEffect, useState } from "react";
import { getAllReviewsForGame } from "../API/reviewService";
import { getGameById } from "../API/gameServices";

const ShowReviewsPage = ({ gameId }) => {

  const [game, setGame] = useState({});
  const [reviews, setReviews] = useState([]);

  /**
    get game details 
    
    display game photo and details on top <Component>

    get all the reviews

    display all the reviews in a table<Component>
   */


  const getGameDetails = async (gameId) => {
    const game = await getGameById(gameId);
    console.log(game);
    setGame(game);
  }

  const getAllReviews = async (gameId) => {
    const reviews = await getAllReviewsForGame(gameId);
    setReviews(reviews);
  }

  useEffect(() => {
    getGameDetails();
  }, [gameId]);

  return (
    // game image
    // game data

    // table of reviews with a button to delet the review
    <Container>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={ game.imageUrl }
            alt={ game.title }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              { game.title }
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
};

export default ShowReviewsPage;