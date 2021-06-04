import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.wrapper}>
            <img className={s.ava} src={props.avatar} alt="avatar"/>
            <div className={s.triangle}></div>
            <div className={s.message}>
                <div className={s.bodyOfMessage}>
                    <span className={s.name}>{props.name}</span>
                    <span className={s.text}>{props.message}</span>
                </div>
                <div className={s.timeOfMessage}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
