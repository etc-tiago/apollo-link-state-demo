import React, { useState, useEffect } from "react";
import { Grid, Segment, Container } from "semantic-ui-react";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { persistCache } from "apollo-cache-persist";

import { ItemsForPurchase } from "./components/ItemsForPurchase";
import { UserCart } from "./components/UserCart";
import { available_items } from "./api";
import { resolvers } from "./resolvers";

const cache = new InMemoryCache({});

const client = new ApolloClient({
  cache,
  clientState: {
    defaults: {
      cart: {
        items: [],
        total: 0,
        __typename: "Cart",
      },
      currency: "USD",
      itemsForSale: available_items,
    },
    resolvers,
  },
});

async function setupPersistent() {
  try {
    await persistCache({
      cache,
      storage: window.localStorage,
    });
  } catch (error) {
    console.error(error);
  }
}

export function App() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setupPersistent().finally(() => setHydrated(true));
  }, []);

  if (!hydrated) {
    return <div>Loading...</div>;
  }

  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}
