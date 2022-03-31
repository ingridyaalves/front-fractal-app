import React, { useState, useEffect } from 'react';
import BeerService from './beers-service.js';

const BeerInformation = (id) => {
  const beerService = new BeerService();
  const { getData } = beerService;
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData(id).then((data) => setData(data));
  }, [id]);

  return (
    <div className="wrapper-for-info">
      <img className="image-beer" src={data.image} alt="" />
      <div>
        <li className="beer-info">
          <span>Name:</span> {data.name}
        </li>
        <li className="beer-info">
          <span>Alcohol:</span> {data.alcohol}
        </li>
        <li className="beer-info">
          <span>Brewers Tips:</span> {data.tips}
        </li>
        <li className="beer-info">
          <span>Description:</span> {data.description}
        </li>
        <h3 className="title-food">Food for Beer:</h3>
        {data.food ? <Food food={data.food} /> : null}
      </div>
    </div>
  );
};

const Food = (props) => {
  const { food } = props;
  const items = food.map((item, index) => {
    return (
      <li key={index}>
        {index + 1}. {item}
      </li>
    );
  });
  return <ul className="food">{items}</ul>;
};

export default BeerInformation;
