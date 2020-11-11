const React = require('react');
const Layout = require('./Layout');
const BeerCard = require('./components/BeerCard');

function Beer(props) {
  return (
    <Layout>
      <BeerCard beer={props.oneBeer} />
    </Layout>
  );
}
module.exports = Beer;
