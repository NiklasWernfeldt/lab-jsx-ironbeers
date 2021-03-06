const React = require('react');
const Layout = require('./Layout');

function Home() {
  return (
    <Layout>
      <main>
        <h1>Home</h1>
        <img src="/images/beer.png" />
        <a href="/beers">Check the Beers!</a>
        <a href="/random-beer">Check a Random Beer.</a>
      </main>
    </Layout>
  );
}

module.exports = Home;
