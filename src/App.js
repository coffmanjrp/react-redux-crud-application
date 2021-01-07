import React, { Fragment } from 'react';

const App = () => {
  const profiles = [
    { name: 'Paul', age: 35 },
    { name: 'John', age: 32 },
    { name: 'Noname' },
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
      Hi, I am {name}, and am {age} years old.
    </p>
  );
};

User.defaultProps = {
  age: 1,
};

export default App;
