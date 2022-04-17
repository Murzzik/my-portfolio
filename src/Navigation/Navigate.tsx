import React from 'react';
import style from '../common/styles/Container.module.css'
import s from './Navigate.module.css'

const Navigate = () => {
    return (
        <div className={style.container}>
            <div className={s.nav}>
                <a href="">MAIN</a>
                <a href="">Skills</a>
                <a href="">Projects</a>
                <a href="">Contacts</a>
            </div>
        </div>
    );
};

export default Navigate;