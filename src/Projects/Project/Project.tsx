import React from 'react';
import s from './Project.module.css'

const Project = (props: any) => {
    return (
        <div className={s.project}>
            <div className={s.imgContainer}>
                <div className={s.motivationText}>Some cool project will be <span>HERE</span></div>
                <a href="#">Watch</a>
            </div>
            <h3>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
};

export default Project;