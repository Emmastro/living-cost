import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { Image } from "@mui/icons-material";

import { Footer } from "../components/Footer";
import { MenuBar } from "../components/MenuBar";


export const About = () => {
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
          About
        </Typography>
        <img src="emma.jpeg" alt="Emmanuel Murairi" style={{maxWidth: "300px"}} />
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          With my passion for technology and entrepreneurship, I have developed
          skills in Software Development and Data analysis, and currently
          exploring the realm of Artificial Intelligence. I am driven to apply
          my knowledge of technology to solve challenging problems, automate
          business processes, and explore insight from data. I am currently
          pursuing my Bachelor’s degree with honors in Computing and have
          completed an intensive project-based Software Engineering program by
          ALX-Holberton. 
          
          <br></br>Outside tech, I am a violinist, playing with Ensemble
          415!, a vibrant chamber orchestra in Mauritius. So far, I have
          performed in 3 concerts at the Caudan Art Center in Port Louis.
        </Typography>
      </Container>

      <Footer />
    </React.Fragment>
  );
};
