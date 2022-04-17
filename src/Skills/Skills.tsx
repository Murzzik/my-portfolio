import React from 'react';
import style from '../common/styles/Container.module.css'
import s from './Skills.module.css'
import Skill from "./Skill/Skill";
import reactLogo from '../common/images/SkillsLogo/react-logo.png'
import jsLogo from '../common/images/SkillsLogo/js-logo.png'
import cssLogo from '../common/images/SkillsLogo/css-logo.png'

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${style.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'JS'} icon={<img src={jsLogo} alt="javascriptLogo"/>}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Skill title={'React'} icon={<img src={reactLogo} alt="reactLogo"/>}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Skill title={'CSS'} icon={<img src={cssLogo} alt="cssLogo"/>}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;