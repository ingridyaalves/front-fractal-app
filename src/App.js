import React, { Component } from 'react';
import BeersList from './beers-list';
import BeerInformation from './beer-information';
import ChangeBeer from './change-beer';
import './main.css';
import icon from './beer-bottle.jpg';
import icon2 from './beer-bottle2.jpg';

export default class App extends Component {
  state = {
    beerId: 25,
    secondId: null,
  };

  onChangeBeer = (beerId) => {
    this.setState({ beerId });
  };

  onChangeInformation = (secondId) => {
    this.setState({ secondId });
  };

  render() {
    const beerInfo = this.state.secondId ? (
      <BeerInformation id={this.state.secondId} />
    ) : (
      <span className="select">Select the beer!</span>
    );

    return (
      <div>
        <div className="punk-beer">
          <img className="beer-icon" src={icon} alt="beer-icon" />
          <span>BEER APP</span>
          <img className="beer-icon2" src={icon2} alt="beer-icon" />
        </div>
        <div className="beer-app">
          <div className="app-wrapper">
            <ChangeBeer onChange={this.onChangeBeer} />
            <BeerInformation id={this.state.beerId} />
          </div>
          <BeersList onChangeInfo={this.onChangeInformation} />
          <div className="selected-beer">{beerInfo}</div>
        </div>
      </div>
    );
  }
}
