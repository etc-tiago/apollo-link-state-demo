import React from "react";
import { Grid, Segment, Container } from "semantic-ui-react";

import { ItemsForPurchase } from "./components/ItemsForPurchase";
import { UserCart } from "./components/UserCart";

export function App() {
  return (
    <Container>
      <br />
      <Grid>
        <Grid.Row columns="one">
          <Grid.Column>
            <Segment>
              <h2>Apollo Local State Management Store</h2>
            </Segment>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns="two">
          <Grid.Column width="eleven">
            <ItemsForPurchase />
          </Grid.Column>
          <Grid.Column width="five">
            <UserCart />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
