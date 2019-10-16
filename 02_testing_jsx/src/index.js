import React from 'react';
import ReactDOM from 'react-dom';


// React component
const App = () => {
    const buttonText = 'Click right here';

    return (
      <div>
          <label className={"label"} for="name"> {/*Use 'className' instead 'class' to avoid collision with class JS*/}
              Enter name:
          </label>
          <input id={"name"} type={"text"}/>
          <button style={{backgroundColor: 'blue', color: 'white'}}>
              {buttonText}
          </button>
      </div>
    );
};


// Show component on DOM
ReactDOM.render(
  <App/>,
    document.querySelector('#root')
);
