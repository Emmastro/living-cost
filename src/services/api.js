const REACT_APP_RAPIDAPI_KEY = process.env.REACT_APP_RAPIDAPI_KEY;
const REACT_APP_COST_OF_LIVING_KEY = process.env.REACT_APP_COST_OF_LIVING_KEY;

const options_countries_facts = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": REACT_APP_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "country-facts.p.rapidapi.com",
  },
  cache: "force-cache",
};

const options_cost_of_living = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": REACT_APP_COST_OF_LIVING_KEY,
    "X-RapidAPI-Host": "cost-of-living-and-prices.p.rapidapi.com",
    //no cors
    "Access-Control-Allow-Origin": "*",

  },
};

export const getCountriesFacts = async () => {
  
  return await fetch('facts.json').then((response) => response.json());

  // return await fetch(
  //   "https://country-facts.p.rapidapi.com/all",
  //   options_countries_facts
  // ).then((response) => {
  //   if (response.status === 429) {
  //     alert(response.json());
  //     return null;
  //   }
  //   return response.json();
  // });
};


export const getCitiesForCostOfLiving = async () => {

  return await fetch(
    `https://cost-of-living-and-prices.p.rapidapi.com/cities`,
    options_cost_of_living
  ).then((response) => {
    if (response.status === 429) {
      alert(response.json());
      return null;
    }
    return response.json();
  });
}

export const getCapitalCostOfLiving = async (capital, country) => {

  //read from file json file locally
  return await fetch('paris.json').then((response) => response.json());

  // return await fetch(
  //   `https://country-facts.p.rapidapi.com/prices?country_name=${country}&city_name=${capital}`,
  //   options_cost_of_living
  // ).then((response) => {
  //   if (response.status === 429) {
  //     alert(response.json());
  //     return null;
  //   }
  //   return response.json();
  // });
};

export const get_country_capital = async (country) => {
  return await fetch(
    `https://country-facts.p.rapidapi.com/country/${country}`,
    options_countries_facts
  ).then((response) => {
    if (response.status === 429) {
      alert(response.json());
      return null;
    }
    return response.json();
  });
};
