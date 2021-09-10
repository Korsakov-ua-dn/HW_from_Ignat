import React, { useState } from "react"
import { requestApi } from "./RequestsAPI"

const Request = () => {

    let [content, setContent] = useState('')
    let [isChecked, setChecked] = useState(false)

    const setSucces = () => {
        requestApi.setSucces(isChecked)
            .then(res => {
                if (res.status === 200) {

                    setContent(res.data.errorText)
                } else {
                    console.log(res.data.errorText);

                }
            })
            .catch(error => {
                setContent(error.response.data.errorText)
            })
    }

    return (
        <div>
            <hr />
            homworks 13
            <hr />
            <div>{content}</div>
            <button onClick={setSucces}>Click</button>
            <input type="checkbox" checked={isChecked} onChange={(e) => setChecked(e.currentTarget.checked)} />
        </div>
    )
}

export default Request