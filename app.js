const express = require('express');
const erv = require('express-react-views');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

// VIEW ENGINE SETUP
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', erv.createEngine());

// MIDDLEWARE
app.use(express.static(__dirname + '/public'));

// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('Home');
});

app.get('/beers', (req, res) => {
  punkAPI
    .getBeers()
    .then(beersFromApi => {
      console.log('All the Beers from the API:', beersFromApi);
      const data = {
        beersFromApi
      };
      res.render('Beers', data);
    })
    .catch(error => console.log(error));
});

app.get('/random-beer', (req, res) => {
  punkAPI
    .getRandom()
    .then(responseFromAPI => {
      console.log('Random beer from the API:', responseFromAPI);
      const oneBeer = responseFromAPI[0];
      const props = {
        oneBeer
      };
      res.render('RandomBeer', props);
    })
    .catch(error => console.log(error));
});

app.get('/beers/:id?', (req, res) => {
  const id = req.params.id;
  console.log('id', id);
  punkAPI
    .getBeer(id)
    .then(responseFromAPI => {
      const oneBeer = responseFromAPI[0];
      const props = {
        oneBeer
      };
      res.render('Beer', props);
    })
    .catch(error => console.log('error', error));
});

app.listen(3000, () => {
  console.log('🏃‍ on port 3000');
});
