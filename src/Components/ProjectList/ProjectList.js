import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard.js';
import './ProjectList.css'

const ProjectList =({ projects })=> {
  return (
    <div className="gridContainer">
    {
      projects.map((project) => {
        const { name, description, key, link, githubPage, isDone } = project;
        return (
          <ProjectCard 
            name = {name}
            description = {description}
            key = {key}
            link = {link}
            githubPage = {githubPage}
            isDone = {isDone}
          />
        );
      })
    }
    </div>
  );
}

export default ProjectList;