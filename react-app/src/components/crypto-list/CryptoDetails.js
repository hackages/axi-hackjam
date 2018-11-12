import React, {Component} from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  PlusButton,
  Values,
} from '../dumb/styledComponent/cryptoDetails'

export class CryptoDetails extends Component {
  render() {
    const {crypto} = this.state // there is an issue here
    return (
      <Card>
        <CardHeader>
          <h3>
            {crypto.name} ({crypto.symbol})
          </h3>
          <h3>{crypto.rank}</h3>
        </CardHeader>
        <CardBody>
          <a to={`/crypto/${crypto.id}`}> + </a>
          <p> Price : ${crypto.quotes.USD.price}</p>
          <p>
            Change(1h) :{' '}
            <Values positif={crypto.quotes.USD.percent_change_1h >= 0}>
              {crypto.quotes.USD.percent_change_1h} %
            </Values>
          </p>
          <p>
            Change(24h) :{' '}
            <Values positif={crypto.quotes.USD.percent_change_24h >= 0}>
              {crypto.quotes.USD.percent_change_24h} %
            </Values>
          </p>
          <p>
            Change(7d) :{' '}
            <Values positif={crypto.quotes.USD.percent_change_7d >= 0}>
              {crypto.quotes.USD.percent_change_7d} %
            </Values>
          </p>
          <p id="date">
            {/*Display the date*/}
            Last update : The Date should be displayed here , I think
          </p>
        </CardBody>
      </Card>
    )
  }
}
