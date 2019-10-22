import React from 'react'
import faker from "faker";

const CommentDetail = (props) => {
    return (
    <div className={'comment'}>
        <a href={'/'} className={"avatar"}>
            <img alt={"avatar"} src={faker.image.avatar()}/>
        </a>
        <div className={"content"}>
            <a href={"/"} className={"author"}>
                {props.author}
            </a>
            <div>
                <span className={"date"}>Today at 19:00</span>
            </div>
            <div className={"text"}>Test 222 comment for dummy user</div>
        </div>
    </div>
    )};

export default CommentDetail;