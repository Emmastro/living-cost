import React, { useEffect, useState, useMemo } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CardMedia from "@mui/material/CardMedia";

import {
  GoogleMap,
  Marker,
  useLoadScript,
  InfoWindow,
} from "@react-google-maps/api";

import { Footer } from "../components/Footer";
import { MenuBar } from "../components/MenuBar";
import { CostOfLiving } from "../components/CostOfLiving";

import {
  getCountriesFacts,
  getCapitalCostOfLiving,
  getCitiesForCostOfLiving,
} from "../services/api";

const ImgMediaCard = ({ data }) => {
  console.log("data img", data, data.flag);
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={data.flag}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name.official}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* list items */}
          <ul>
            <li>Capital: {data.capital}</li>
            <li>Population: {data.population}</li>
            <li>Area: {data.area}</li>
            <li>Region: {data.region}</li>
            <li>Subregion: {data.subregion}</li>
            <li>Currency: {JSON.stringify(Object.values(data.currencies))}</li>
            <li>Language: {JSON.stringify(Object.values(data.languages))}</li>
          </ul>
        </Typography>
      </CardContent>
    </Card>
  );
};

export const CompareCostOfLiving = () => {
  const [state, setState] = useState({
    countries_facts: null,
    listOfCapitals: null,
    costOfLiving1: null,
    costOfLiving2: null,
    costOfLivingSet: false,
    countryFacts1: null,
    countryFacts2: null,
  });

  console.log(process.env.REACT_APP_GOOGLE_API_KEY);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const [activeMarker, setActiveMarker] = useState(null);

  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  const [selectCapital1, setSelectCapital1] = useState(null);
  const [selectCapital2, setSelectCapital2] = useState(null);

  useEffect(() => {
    var capitals = [];
    var listOfCapitals = []; //TODO: should be a set from the beginning (new Set())
    if (!state.listOfCapitals) {
      Promise.all([getCitiesForCostOfLiving(), getCountriesFacts()]).then(
        (data) => {
          data[0].cities.forEach((city) => {
            //capitals.push(country.capital); // TODO: check if from this API, some coutries have more than 1 capital
            listOfCapitals.push({
              label: `${city.city_name} - ${city.country_name}`,
            });
          });
          //drop duplicates on listOfCapitals
          listOfCapitals = [...new Set(listOfCapitals.map(JSON.stringify))].map(
            JSON.parse
          );
          console.log("unique: ", listOfCapitals);
          setState({
            ...state,
            countries_facts: data[1],
            //capitals: capitals,
            listOfCapitals: listOfCapitals,
          });
        }
      );
    }
  }, []);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const test = () => {
    const capital1 = "";
    const country1 = "";
    const capital2 = "";
    const country2 = "";
    const costOfLiving1 = getCapitalCostOfLiving(capital1, country1).then(
      (data) => {
        console.log("data", data);
        return data;
      }
    );

    const costOfLiving2 = getCapitalCostOfLiving(capital2, country2).then(
      (data) => {
        console.log("data2", data);
        return data;
      }
    );

    Promise.all([costOfLiving1, costOfLiving2]).then((values) => {
      console.log("values", values);
      setState({
        ...state,
        costOfLiving1: values[0],
        costOfLiving2: values[1],
      });
    });
  };

  const compareCapitals = () => {
    //test();
    if (selectCapital1 && selectCapital2) {
      const [capital1, country1] = selectCapital1.split(" - ");
      const [capital2, country2] = selectCapital2.split(" - ");

      const costOfLiving1 = getCapitalCostOfLiving(capital1, country1).then(
        (data) => {
          console.log("data", data);
          return data;
        }
      );

      const costOfLiving2 = getCapitalCostOfLiving(capital2, country2).then(
        (data) => {
          console.log("data2", data);
          return data;
        }
      );

      Promise.all([costOfLiving1, costOfLiving2]).then((values) => {
        console.log("values", values);
        setState({
          ...state,
          costOfLiving1: values[0],
          costOfLiving2: values[1],
        });
      });
    } else {
      //TODO: show message on the UI without using alert
      console.log("Please select 2 capitals to compare");
      setState({
        ...state,
        costOfLiving1: null,
        costOfLiving2: null,
        costOfLivingSet: false,
      });
    }
  };

  const { listOfCapitals } = state;

  const showCountryFacts = (event, capitalId) => {
    console.log("showing country facts", capitalId, event);
    console.log(state.countries_facts);
    if (capitalId === 1) {
      const [capital1, country1] = event.target.value.split(" - ");

      const countryFacts = state.countries_facts.filter(
        (country) => country.name.common === country1
      )[0];
      console.log("countryFacts2", countryFacts);
      setState({ ...state, countryFacts1: countryFacts });
      setSelectCapital1(event.target.value);
    } else {
      const [capital2, country2] = event.target.value.split(" - ");
      const countryFacts = state.countries_facts.filter(
        (country) => country.name.common === country2
      )[0];
      console.log("countryFacts2", countryFacts);
      setState({ ...state, countryFacts2: countryFacts });
      setSelectCapital2(event.target.value);
    }
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
      {/* Hero unit */}
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
      </Container>

      <Container>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          maxWidth="lg"
          margin={2}
        >
          <Grid item xs={5} u>
            <Autocomplete
              disablePortal
              options={listOfCapitals}
              renderInput={(params) => (
                <TextField {...params} label="Capital Cities" />
              )}
              onSelect={(event) => showCountryFacts(event, 1)}
            />
          </Grid>
          <Grid item xs={2}>
            vs
          </Grid>
          <Grid item xs={5}>
            <Autocomplete
              disablePortal
              options={listOfCapitals}
              renderInput={(params) => (
                <TextField {...params} label="Capital Cities" />
              )}
              onSelect={(event) => showCountryFacts(event, 2)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={compareCapitals}>
              Submit
            </Button>
          </Grid>
          <br></br>
          <Grid xs={5} centered margin={2}>
            {state.countryFacts1 ? (
              <ImgMediaCard data={state.countryFacts1} />
            ) : null}
          </Grid>
          <Grid xs={5} centered margin={2}>
            {state.countryFacts2 ? (
              <ImgMediaCard data={state.countryFacts2} />
            ) : null}
          </Grid>

          <Grid item xs={12}>
            {/* {JSON.stringify({ lat: Number.parseFloat(state.countryFacts1?.latlng[1]), lng: Number.parseFloat(state.countryFacts1[0]) })}
             */}
            {!isLoaded ? (
              <h1>Loading...</h1>
            ) : (
              <div style={{ height: "100vh", width: "100%" }}>
                <GoogleMap
                  mapContainerClassName="map-container"
                  center={center}
                  zoom={2}
                >
                  {/* {state.countryFacts1 ? <Marker position={{ lat: -27, lng: 133 }} /> : null} */}

                  {state.countryFacts1 ? (
                    <Marker
                      onClick={() => handleActiveMarker(1)}
                      position={{
                        lat: state.countryFacts1.latlng[1],
                        lng: state.countryFacts1.latlng[0],
                      }}
                    >
                      {activeMarker === 1 ? (
                        <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                          <div>{state.countryFacts1.name.common}</div>
                        </InfoWindow>
                      ) : null}
                    </Marker>
                  ) : null}
                  {state.countryFacts2 ? (
                    <Marker
                      onClick={() =>
                        handleActiveMarker(2)
                      }
                      position={{
                        lat: state.countryFacts2.latlng[0],
                        lng: state.countryFacts2.latlng[1],
                      }}
                    >
                      {activeMarker === 2 ? (
                        <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                          <div>{state.countryFacts2.name.common}</div>
                        </InfoWindow>
                      ) : null}
                    </Marker>
                  ) : null}
                </GoogleMap>
              </div>
            )}
          </Grid>
        </Grid>

        <CostOfLiving
          costOfLiving1={state.costOfLiving1}
          costOfLiving2={state.costOfLiving2}
        />
      </Container>

      <Footer />
    </React.Fragment>
  );
};
