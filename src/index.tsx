import React from 'react';
import ReactDOM from 'react-dom';
import LoginContainer from './containers/loginContainer';
import SignupContainer from './containers/signupContainer';
import './index.css';

const App: React.FC = () => {
    return (
        <div>
            <LoginContainer />
            <SignupContainer />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));