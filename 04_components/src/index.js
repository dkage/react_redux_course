import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

// Creates a functional component
const App = () => {
    return (
        <div className={'ui container comments'}>
            <CommentDetail author="Sam"/>
            <CommentDetail author="Jane"/>
            <CommentDetail author="Bam"/>
            <CommentDetail author="Tim"/>
        </div>

    );
};

// Renders the App component into a div with id 'root'
ReactDOM.render(<App />, document.querySelector('#root'));