import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button } from 'reactstrap';
import DashNavbar from './components/Navbar'

class App extends Component {
  constructor() {
    super()
    this.state = {data:undefined}
  }

  async componentDidMount() {
    const response = await fetch('https://api.coinmarketcap.com/v1/ticker/?limit=100')
    const json = await response.json();
    this.setState({data:json});
    console.log(this.state.data)
  }


  render() {

    const { data } = this.state
    return (
      <div className="App">
        <DashNavbar />
       <div>
        {data ? 
        (
            <Table className="currencyTable" striped bordered>
                <tbody>
                  <tr className="headerRow">
                    <th>Id</th>
                    <th>Rank</th>
                    <th>Symbol</th>
                    <th>Price In USD</th>
                    <th>Market Cap in USD</th>
                    <th>Percent Changed In 1 Hour</th>
                    <th>Percent Changed In 1 Day</th>
                    <th>Percent Changed In 1 Week</th>
                    <th>Available Supply</th>
                    <th></th>
                  </tr>
                  {this.state.data.map(data => 
                    <tr key={data.id} className="dataRow">
                      <td>{data.id}</td>
                      <td>{data.rank}</td>
                      <td>{data.symbol}</td>
                      <td>{data.price_usd}</td>
                      <td>{data.market_cap_usd}</td>
                      <td>{data.percent_change_1h}</td>
                      <td>{data.percent_change_24h}</td>
                      <td>{data.percent_change_7d}</td>
                      <td>{data.available_supply}</td>
                      <td className="buttonRow"><Button color="danger" className="currencyButton">Edit</Button>{' '}</td>
                    </tr>
                    )}
                </tbody>
            </Table>
              // <div>
              //   <div>{data[0].id}</div>
              //   <div></div>
              // </div>
        )

        : <div className="loadingNotification">Loading...</div>  
      }
      </div>
      </div>
    );
  }
}

export default App;
