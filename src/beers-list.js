import React, { Component } from 'react';
import BeerService from './beers-service';

export default class BeersList extends Component {
  beerService = new BeerService();

  state = {
    beers: [],
  };

  componentDidMount() {
    const { getAllBeers } = this.beerService;
    getAllBeers().then((beers) => {
      this.setState({
        beers,
      });
    });
  }

  render() {
    const { beers } = this.state;
    const { onChangeInfo } = this.props;
    const items = beers.map((item, index) => {
      const { id } = item;
      return (
        <li className="beers-name" onClick={() => onChangeInfo(id)} key={index}>
          {item.name}
        </li>
      );
    });
    return <div className="all-beers">{items}</div>;
  }
}
