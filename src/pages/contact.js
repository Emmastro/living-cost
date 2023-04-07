import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";

import { Footer } from "../components/Footer";
import { MenuBar } from "../components/MenuBar";

const GETFORM_API = `https://getform.io/f/${process.env.REACT_APP_GETFORM_API_KEY}`;

export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById("contact-form");
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        alert("Thank you for your message!");
      } else {
        alert("Oops! There was a problem.");
      }
    };
    xhr.send(data);
  };

  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <MenuBar />
      </AppBar>

      <Container
        disableGutters
        maxWidth="lg"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h2"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Contact us
        </Typography>
        <Grid container direction="column" justify="center" alignItems="center">
          <form id="contact-form" method="post" action={GETFORM_API}>
            <Grid item>
              <TextField
                fullWidth
                required
                id="name"
                label="Name"
                name="userName"
                margin="normal"
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                required
                id="email"
                label="Email"
                name="email"
                margin="normal"
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                required
                id="message"
                label="Message"
                name="message"
                margin="normal"
                multiline
                rows={4}
                rowsMax="5"
              />
            </Grid>
            <Grid
              container
              direction="row"
              spacing={2}
              style={{ marginTop: 20 }}
            >
              <Grid item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Container>

      <Footer />
    </React.Fragment>
  );
};
