import React from "react";
import { Image, Card, Button } from "semantic-ui-react";

export function Item(props) {
  return (
    <Card size="small">
      <Image
        src={props.thumbnail_url}
        style={{ height: 125, objectFit: "cover" }}
      />
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Card.Meta>
          {props.currency === "EUR" ? "€" : "$"} {props.price.toFixed(2)}
        </Card.Meta>
      </Card.Content>
      <Card.Content as={Button}>Add to Cart</Card.Content>
    </Card>
  );
}
