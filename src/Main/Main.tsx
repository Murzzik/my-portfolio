import React from 'react';
import style from '../common/styles/Container.module.css'
import s from './Main.module.css'

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${style.container} ${s.mainContainer}`}>
                <div className={s.Greetings}>
                    <span>Hi There!</span>
                    <h1>I am <span className={s.authorName}>Alexander Storozhuk</span></h1>
                    <p className={s.typewriter}>&lt;Frontend Developer/&gt;</p>
                </div>
                <div className={s.GreetingsPhoto}>Some cool photo may be <span>here</span></div>
            </div>
        </div>
    );
};

export default Main;