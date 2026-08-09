import React from 'react';
import Login from './containers/login';
import Signup from './containers/signup';

const App: React.FC = () => {
  return (
    <div className="App">
      <Login />
      <Signup />
    </div>
  );
};

export default App;