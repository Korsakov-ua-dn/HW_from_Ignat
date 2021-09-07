import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value, setValue] = useState<any[]>([0, 100]) // need to fix
    // const [min, max]

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value[0]}</span>
                <SuperRange 
                    onChangeRange={setValue}
                    value={value}
                />
            </div>

            <div>
                <span>{value[0]}</span>
                <SuperDoubleRange
                    onChangeRange={setValue}
                    value={value}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value[1]}</span>
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
