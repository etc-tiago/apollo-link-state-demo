import React from 'react'
import { Button } from 'semantic-ui-react'


export function CurrencyButtons(props) {

  return (
    <Button.Group fluid>
      <Button
        content='USD'
        icon='usd'
        positive={props.currency === 'USD'}
      />
      <Button
        content='EUR'
        icon='euro'
        positive={props.currency === 'EUR'}
      />
    </Button.Group>
  )
}