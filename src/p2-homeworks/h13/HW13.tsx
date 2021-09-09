import React, { useState } from "react"
import { requestApi } from "./RequestsAPI"

const Request = () => {

    let [content, setContent] = useState('')
    let [isChecked, setChecked] = useState(false)

    const setSucces = () => {
        requestApi.setSucces(isChecked)
            .then(res => setContent(res.data.errorText))
            .catch(error => console.log(error))
    }

    return (
        <div>
            <hr />
            homworks 13
            <hr />
            <div>{content}</div>
            <button onClick={setSucces}>Click</button>
            <input type="checkbox" checked={isChecked} onChange={(e) => setChecked(e.currentTarget.checked)}/>
        </div>
    )
}

export default Request