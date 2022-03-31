export default class BeerService {
  _apiBase = 'https://api.punkapi.com/v2/beers/';

  getData = async ({ id }) => {
    const res = await fetch(`${this._apiBase}${id}/`);
    const data = await res.json();
    return this._transformBeer(data);
  };

  getAllBeers = async () => {
    const res = await fetch('https://api.punkapi.com/v2/beers');
    const beers = await res.json();
    return beers;
  };

  _transformBeer = (data) => {
    return {
      alcohol: data[0].abv,
      image: data[0].image_url,
      food: data[0].food_pairing,
      name: data[0].name,
      tips: data[0].brewers_tips,
      description: data[0].description,
    };
  };
}
