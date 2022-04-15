import React from 'react';
import s from './Hire.module.css'
import style from "../common/styles/Container.module.css";

const Hire = () => {
    return (
        <div className={s.hireBlock}>
            <div className={`${style.container} ${s.hireContainer}`}>
                <span className={s.title}>Remote work options</span>
                <button className={s.hireBtn}>Hire me</button>
            </div>
        </div>
    );
};

export default Hire;