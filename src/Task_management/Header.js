import React from 'react'
import style from './custom_styles.css'

const Header = () => {
    return (
        <header className={style.header}>
            <h1>Task Tracker</h1>
            {/* <button className={style.btn}>Add</button> */}
        </header>
    )
}


export default Header
