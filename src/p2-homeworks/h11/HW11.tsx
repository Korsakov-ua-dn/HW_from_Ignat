import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from "../h12/HW12.module.css";
import {useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";

function HW11() {
    const [value, setValue] = useState<any[]>([0, 100]) // need to fix
    // const [min, max]
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme)

    return (
        <div className={`${s[theme]} ${s[theme + '-text']}`}>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span className={s[theme + '-text']}>{value[0]}</span>
                <SuperRange
                    onChangeRange={setValue}
                    value={value}
                />
            </div>

            <div>
                <span className={s[theme + '-text']}>{value[0]}</span>
                <SuperDoubleRange
                    onChangeRange={setValue}
                    value={value}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span className={s[theme + '-text']}>{value[1]}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
