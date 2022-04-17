import React from 'react';
import s from './Footer.module.css';
import style from "../common/styles/Container.module.css";
import telegram from '../common/images/telegram.png'
import viber from '../common/images/viber.png'
import instagram from '../common/images/instagram.png'
import facebook from '../common/images/facebook.png'

const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${style.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Alexander Storozhuk</h2>
                <div className={s.socialIconsBlock}>
                    <div className={s.socialIcon}><img src={telegram} alt="telegramLogo"/></div>
                    <div className={s.socialIcon}><img src={viber} alt="viberLogo"/></div>
                    <div className={s.socialIcon}><img src={instagram} alt="instagramLogo"/></div>
                    <div className={s.socialIcon}><img src={facebook} alt="facebookLogo"/></div>
                </div>
                <span className={s.footerCopyright}>©2022 All rights reserved</span>
            </div>
        </div>
    );
};

export default Footer;