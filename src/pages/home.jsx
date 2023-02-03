import React, { useState } from "react";
import { Input, Button, Form } from "semantic-ui-react";
import { ComparaisonResult } from "../components/ComparaisonResult";

const Home = () => {
  const [capital1, setCapital1] = useState("");
  const [capital2, setCapital2] = useState("");
  const [data, setData] = useState("");

  const compare_price = () => {
    setData([
      {
        about: {
          country: "France",
          city: "Paris",
          currency: "EUR",
        },
        data: [
          { title: "price", value: 3 },
          { title: "cost bread", value: 2.5 },
        ],
      },
      {
        about: {
          country: "France",
          city: "Paris",
          currency: "EUR",
        },
        data: [
          { title: "price", value: 3 },
          { title: "cost bread", value: 2.5 },
        ],
      },
    ]);
  };

  return (
    <div>
      <h1>Compare the cost of living between 2 capitals</h1>
      <Form onSubmit={compare_price}>
        <Input
          placeholder="Capital 1 ..."
          name="capital1"
          value={capital1}
          onChange={(event) => setCapital1(event.target.value)}
        />
        Compare with
        <Input
          placeholder="Capital 2 ..."
          name="capital2"
          value={capital2}
          onChange={(event) => setCapital2(event.target.value)}
        />
        <br />
        <Button type="submit">Compare</Button>
      </Form>
      <h2>
        Results <a href="map"> View on the map</a>
      </h2>
      <ComparaisonResult data={data}></ComparaisonResult>
    </div>
  );
};

export default Home;
