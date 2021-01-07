import React, { Component, Fragment } from 'react';

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Hello World</h1>
        <label htmlFor="bar">Bar</label>
        <input type="text" onClick={(e) => (e.target.value = 'Hello World')} />
      </Fragment>
    );
  }
}

export default App;
