import React from 'react';
import ReactDOM from 'react-dom';


// React component
const App = () => {
    const buttonText = { text: 'Click right here'};
    const style_button = {backgroundColor: 'blue', color: 'white'};

    return (
      <div>
          <label className={"label"} for="name"> {/*Use 'className' instead 'class' to avoid collision with class JS*/}
              Enter name:
          </label>
          <input id={"name"} type={"text"}/>
          <button style={style_button}>
              {buttonText.text}
          </button>
      </div>
    );
};


// Show component on DOM
ReactDOM.render(
  <App/>,
    document.querySelector('#root')
);
