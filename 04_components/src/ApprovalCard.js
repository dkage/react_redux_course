import React from 'react'
import Card from './Card.js'

const ApprovalCard = (props) => {

    return(
        <Card>
            <div className={'content'}>
                {props.children}
            </div>
            <div className={'extra content'}>
                <div className={'ui two buttons'}>
                    <div className={'ui basic green button'}>Accept</div>
                    <div className={'ui basic red button'}>Refuse</div>
                </div>
            </div>
        </Card>
    )};


export default ApprovalCard;