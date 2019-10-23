import React from 'react'

const CommentDetail = props => {
    return (
    <div className={'comment'}>
        <a href={'/'} className={"avatar"}>
            <img alt={"avatar"} src={props.userAvatar}/>
        </a>
        <div className={"content"}>
            <a href={"/"} className={"author"}>
                {props.author}
            </a>
            <div>
                <span className={"date"}>{props.date}</span>
            </div>
            <div className={"text"}>{props.text}</div>
        </div>
    </div>
    )};

export default CommentDetail;