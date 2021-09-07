import { Slider, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState, ChangeEvent } from 'react'

type SuperDoubleRangePropsType = {
    onChangeRange: (value: number[]) => void
    value: number[]
    // min, max, step, disable, ...
}

const useStyles = makeStyles({
    root: {
        width: 125,
        display: 'inline-block',
    },
});

 const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
     {
        onChangeRange,
        value,
        ...restProps
     }
 ) => {
    const classes = useStyles();

    // const [disabled, setDisable] = useState<any>()
    // const [max, setMax] = useState<any>()

    const handleChange = (event: any, newValue: number | number[]) => {

        console.log(event.target.dataset.index)

        if(event.target.dataset.index === "0") {
            if (newValue >= value[1]) {return} else onChangeRange(newValue as number[]);
        } else {
            if (newValue <= value[0]) {return} else onChangeRange(newValue as number[]);
        }
    };

        return (
            <div className={classes.root}>
            <Typography id="range-slider" gutterBottom/>
            <Slider
                value={value}
                onChange={handleChange}
                aria-labelledby="range-slider"
                
                
                {...restProps}
            />
            </div>
        );
}
export default SuperDoubleRange








// const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
//     {
//         onChangeRange, value,
//         // min, max, step, disable, ...
//     }
// ) => {
//     // сделать самому, можно подключать библиотеки

//     return (
//         <>
//             DoubleRange
//         </>
//     )
// }
