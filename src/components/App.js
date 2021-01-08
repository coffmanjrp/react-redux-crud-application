import React, { Component, Fragment } from 'react';

class App extends Component {
  render() {
    const profiles = [
      { name: 'Paul', age: 35 },
      { name: 'John', age: 32 },
      { name: 'Noname', age: 3 },
    ];

    return (
      <Fragment>
        {profiles.map((profile, idx) => {
          return <User name={profile.name} age={profile.age} key={idx} />;
        })}

        <Counter />
      </Fragment>
    );
  }
}

class User extends Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.age = props.age;
  }

  render() {
    return (
      <p>
        Hi, I am {this.name}, and am {this.age} year{this.age === 1 ? '' : 's'}{' '}
        old.
      </p>
    );
  }
}

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.handlePlusButton = this.handlePlusButton.bind(this);
    this.handleMinusButton = this.handleMinusButton.bind(this);
  }

  handlePlusButton() {
    const { count } = this.state;

    this.setState({
      count: count + 1,
    });
  }

  handleMinusButton() {
    const { count } = this.state;

    this.setState({
      count: count > 0 ? count - 1 : 0,
    });
  }

  render() {
    return (
      <Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </Fragment>
    );
  }
}

export default App;
