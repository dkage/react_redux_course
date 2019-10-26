import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker'

// Creates a functional component
const App = () => {
    return (
        <div className={'ui container comments'}>
            <ApprovalCard>
                <CommentDetail userAvatar={faker.image.avatar()} author="Sam"  date="Yesterday"       text={faker.lorem.paragraph()}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail userAvatar={faker.image.avatar()} author="Jane" date="Eight hours ago" text={faker.lorem.paragraph()}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail userAvatar={faker.image.avatar()} author="Bam"  date="Five hours ago"  text={faker.lorem.paragraph()}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail userAvatar={faker.image.avatar()} author="Tim"  date="One second ago"  text={faker.lorem.paragraph()}/>
            </ApprovalCard>
        </div>

    );
};

// Renders the App component into a div with id 'root'
ReactDOM.render(<App />, document.querySelector('#root'));