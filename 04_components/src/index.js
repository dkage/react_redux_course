import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

// Creates a functional component
const App = () => {
    return (
        <div className={'ui container comments'}>
            <CommentDetail/>
        </div>

    );
};

// Renders the App component into a div with id 'root'
ReactDOM.render(<App />, document.querySelector('#root'));