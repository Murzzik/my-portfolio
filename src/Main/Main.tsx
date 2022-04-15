import React from 'react';
import style from '../common/styles/Container.module.css'
import s from './Main.module.css'

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={style.container}>
                <div className={s.Greetings}>
                    <span>Hi There!</span>
                    <h1>I am Alexander Storozhuk</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.GreetingsPhoto}></div>
            </div>
        </div>
    );
};

export default Main;