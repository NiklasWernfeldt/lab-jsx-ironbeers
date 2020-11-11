const React = require('react');

function BeerCard(props) {
  return (
    <a href={`/beers/${props.beer.id}`}>
      <div>
        <img src={props.beer.image_url} width="200" />
        <h2>{props.beer.name}</h2>
        <h4>{props.beer.tagline}</h4>
        <p>{props.beer.description}</p>
        {props.hideDetails ? null : (
          <div>
            <h3>Food Pairing</h3>
            <ul>
              {props.beer.food_pairing.map((el, i) => {
                return <li key={i}>{el}</li>;
              })}
            </ul>
            <p>
              <strong>Brewers Tips:</strong> {props.beer.brewers_tips}
            </p>
          </div>
        )}
      </div>
    </a>
  );
}

module.exports = BeerCard;
