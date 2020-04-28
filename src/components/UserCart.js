import React from "react";
import { Segment, Divider } from "semantic-ui-react";

import { CurrencyButtons } from "./CurrencyButtons";

export function UserCart() {
  return (
    <Segment>
      <h1>My Cart</h1>
      <Divider />
      <h4>Total: </h4>
      <CurrencyButtons />
    </Segment>
  );
}
