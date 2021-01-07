import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const App = () => {
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
    </Fragment>
  );
};

const User = ({ name, age }) => {
  return (
    <p>
      Hi, I am {name}, and am {age} year{age === 1 ? '' : 's'} old.
    </p>
  );
};

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};

export default App;
