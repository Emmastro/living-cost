import React from "react";
import { Table, Grid } from "semantic-ui-react";

export const ComparaisonResult = (props) => {
  console.log("data", props.data.capital1);
  if (props.data === "") {
    return <div></div>;
  }
  return (
    <div>
      <Grid columns={2}>
        {props.data.map((capital) => (
          <Grid.Column>
          <h3>{capital.about.country} - {capital.about.city}</h3>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Index</Table.HeaderCell>
                <Table.HeaderCell>Value</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {capital.data.map((row) => (
                <Table.Row>
                  <Table.Cell>{row.title}</Table.Cell>
                  <Table.Cell>{row.value}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Grid.Column>
        ))}
        
      </Grid>
    </div>
  );
};
