import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";

import { Footer } from "../components/Footer";
import { MenuBar } from "../components/MenuBar";

export const CurrencyConversion = () => {
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
          Compare the cost of living between 2 capitals
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          Welcome to our website where you can compare the cost of living
          between two of the world's most vibrant capitals. We understand that
          moving to a new city can be a daunting experience, especially when it
          comes to budgeting for everyday expenses. Our website aims to provide
          you with the tools and information you need to make an informed
          decision about where to live. We compare the cost of living between
          two cities, taking into account factors such as housing,
          transportation, food, and entertainment. Our data is updated regularly
          to ensure accuracy and reliability. Whether you're a student, a
          professional, or a family, our website is the perfect resource for
          anyone looking to make a smart financial decision when it comes to
          choosing a new city to call home.
        </Typography>
      </Container>

      <Footer />
    </React.Fragment>
  );
};
