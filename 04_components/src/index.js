import React from 'react';
import ReactDOM from 'react-dom';

function getTime() {
    return (new Date()).toLocaleTimeString()
}

// Creates a functional component
const App = () => {
    return (
        <div className={'ui container comments'}>
            <div className={'comment'}>
                <a href={'/'} className={"avatar"}>
                    <img alt={"avatar"} />
                </a>
                <div className={"content"}>
                    <a href={"/"} className={"author"}>
                        Sam
                    </a>
                    <div>
                        <span className={"date"}>Today at 18:00</span>
                    </div>
                    <div className={"text"}>Test comment for dummy user</div>
                </div>
            </div>
        </div>
    );
};

// Renders the App component into a div with id 'root'
ReactDOM.render(<App />, document.querySelector('#root'));