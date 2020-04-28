import React from "react";
import { Segment, Card, Divider } from "semantic-ui-react";

import { Item } from "./Item";
import { available_items } from "../api";

export function ItemsForPurchase() {
  return (
    <Segment>
      <h1>Items Available</h1>
      <Divider />
      <Card.Group itemsPerRow={5}>
        {available_items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </Card.Group>
    </Segment>
  );
}
