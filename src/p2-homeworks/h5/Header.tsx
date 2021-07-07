import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './HW5.module.css'
import {PATH} from './Routes'

function Header() {
    return (
        <div>
            <div><NavLink to={PATH.PRE_JUNIOR} activeClassName={s.active}>pre-junior</NavLink></div>
            <div><NavLink to={PATH.JUNIOR} activeClassName={s.active}>junior</NavLink></div>
            <div><NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.active}>junior+</NavLink></div>
        </div>
    )
}

export default Header
