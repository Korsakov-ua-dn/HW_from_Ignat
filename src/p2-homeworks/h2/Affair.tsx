import React from 'react'
import {AffairType} from './HW2'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback:  any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (id: number) => {props.deleteAffairCallback(id)} // need to fix

    return (
        <div>
            // show some text
            <button onClick={() => deleteCallback(props.affair._id)}>X</button>
        </div>
    )
}

export default Affair
