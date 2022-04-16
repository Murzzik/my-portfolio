import React from 'react';
import s from "./Contacts.module.css";
import style from "../common/styles/Container.module.css";


const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${style.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <form className={s.contactsForm}>
                    <label>Your name:</label>
                    <input type="text"/>
                    <label>Your email:</label>
                    <input type="email"/>
                    <label>Your message:</label>
                    <textarea name="message"/>
                </form>
                <button className={s.contactsBtn}>SEND MESSAGE</button>
            </div>
        </div>
    );
};

export default Contacts;