import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function Index() {
    return (
       <App />
    );
}

export default Index;

if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}