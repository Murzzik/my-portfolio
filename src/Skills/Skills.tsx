import React from 'react';
import style from '../common/styles/Container.module.css'
import s from './Skills.module.css'
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${style.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'JS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Skill title={'React'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Skill title={'HTML/CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;