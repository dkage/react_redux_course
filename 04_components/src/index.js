import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker'

// Creates a functional component
const App = () => {
    return (
        <div className={'ui container comments'}>
            <CommentDetail author="Sam"  date="Yesterday" text={faker.lorem.paragraph()}/>
            <CommentDetail author="Jane" date="Eight hours ago" text={faker.lorem.paragraph()}/>
            <CommentDetail author="Bam"  date="Five hours ago" text={faker.lorem.paragraph()}/>
            <CommentDetail author="Tim"  date="One second ago" text={faker.lorem.paragraph()}/>
        </div>

    );
};

// Renders the App component into a div with id 'root'
ReactDOM.render(<App />, document.querySelector('#root'));