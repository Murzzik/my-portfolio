import React from 'react';
import Project from "./Project/Project";
import s from "./Projects.module.css";
import style from "../common/styles/Container.module.css";


const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${style.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>My Projects</h2>
                <div className={s.projects}>
                    <Project title={'TodoList'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Project title={'Social Media Platform'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;