import React from 'react';
import s from './Header.module.css'
import Navigate from "../Navigation/Navigate";

const Header = () => {
    return (
        <div className={s.header}>
            <Navigate/>
        </div>
    );
};

export default Header;