// Import the React and ReactDOM libraries
import React from 'react';
import ReactDom from 'react-dom';


// Create a React component
const App = function() {
    return <div>Hello world!</div>;
};


// Take the react component and show it on the screen
ReactDom.render(<App />, document.querySelector('#root'));
