import React from 'react';
import s from './Footer.module.css';
import style from "../common/styles/Container.module.css";

const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${style.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Alexander Storozhuk</h2>
                <div className={s.socialIconsBlock}>
                    <div className={s.socialIcon}>1</div>
                    <div className={s.socialIcon}>2</div>
                    <div className={s.socialIcon}>3</div>
                    <div className={s.socialIcon}>4</div>
                </div>
                <span className={s.footerCopyright}>©2022 All rights reserved</span>
            </div>
        </div>
    );
};

export default Footer;