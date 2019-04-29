import React from "react";
import './ProjectCard.css'

const ProjectCard =({ 
  name, 
  description, 
  id, 
  link, 
  images, 
  githubPage, 
  status, 
  changePopUp })=> {

  const callChangePopUp =()=> {
    changePopUp(id);
    var popUp = document.getElementById(`popup${id}`);
    if (popUp) {
      popUp.style.display = "block";
    }
  };

  return (
    <div className="Card">  
      <div className='Card_top'>
        <h2>{name}</h2>
        <hr />  
      </div>
      <div className='Card_bottom'>    
        <img className="Card_bottom-image" src={images[0]}/>  
        <p>{description}</p>
        <div>
          <p>{status}</p>
          <button onClick={callChangePopUp}>Details</button>
          {(link === null) ? null : <a href={link}>Website Link</a> }
          <a href={githubPage}>githubPage</a>
        </div>
      </div>        
    </div>
  );
}

export default ProjectCard;