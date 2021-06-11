import React from 'react'
import {AffairType} from './HW2'
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback:  any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (id: number) => {props.deleteAffairCallback(id)} // need to fix

    return (
        <div className={s.item}>
            <span>show some text</span>
            <button onClick={() => deleteCallback(props.affair._id)}>x</button>
        </div>
    )
}

export default Affair
