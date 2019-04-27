import React from "react";
import './ProjectCard.css'

const ProjectCard =({ name, description, key, link, githubPage, isDone })=> {
  return (
    <div className="Card" onClick={console.log('yo')}>  
      <div className='Card_top'>
        <h2>{name}</h2>
        <hr />  
      </div>
      <div className='Card_bottom'>    
        <img />  
        <p>{description}</p>
        {(link === null) ? '' : <a href={link}>Website Link</a> }
        <a href={githubPage}>githubPage</a>
      </div>        
    </div>
  );
}

export default ProjectCard;