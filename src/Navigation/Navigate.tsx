import React from 'react';
import style from '../common/styles/Container.module.css'
import s from './Navigate.module.css'

const Navigate = () => {
    return (
        <div className={style.container}>
            <div className={s.nav}>
                <a href="">Главная</a>
                <a href="">Скиллы</a>
                <a href="">Проекты</a>
                <a href="">Контакты</a>
            </div>
        </div>
    );
};

export default Navigate;