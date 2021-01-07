import React, { Fragment } from 'react';

const App = () => {
  return (
    <Fragment>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </Fragment>
  );
};

const Cat = () => {
  return <p>Nya!</p>;
};

export default App;
