import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { addGame } from "../API/gameServices";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function AddNewGame() {
  const imagePlaceholder =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/640px-No-Image-Placeholder.svg.png";

  const [imageUrl, setImageUrl] = useState(imagePlaceholder);

  const handleImageSettting = (e) => {
    const { value } = e.target;
    if (value) setImageUrl(value);
    else setImageUrl(imagePlaceholder);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const title = data.get("title");
    const description = data.get("description");
    const developer = data.get("developer");
    const imageUrl = data.get("imageUrl");
    console.log({
      title: title,
      description: description,
      developer: developer,
      imageUrl: imageUrl,
    });
    await addGame({ title, description, developer, imageUrl });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            New Game
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="title"
                  required
                  fullWidth
                  id="title"
                  label="Game Title"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="developer"
                  label="Developer"
                  name="developer"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="imageUrl"
                  label="Image Url"
                  id="imageUrl"
                  onChange={handleImageSettting}
                />
              </Grid>

              <Grid item xs={6}>
                <img width={200} alt="asd" src={imageUrl} />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={10}
                  name="description"
                  label="Description"
                  id="description"
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
