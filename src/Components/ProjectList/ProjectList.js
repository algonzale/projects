import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard.js';
import './ProjectList.css'

const ProjectList =({ projects, changePopUp })=> {
  return (
    <div className="gridContainer">
    {
      projects.map((project) => {
        const { name, description, id, link, images, githubPage, status} = project;
        return (
          <ProjectCard 
            name = {name}
            description = {description}
            id = {id}
            link = {link}
            images = {images}
            githubPage = {githubPage}
            status = {status}
            changePopUp = {changePopUp}
          />
        );
      })
    }
    </div>
  );
}

export default ProjectList;