import React from "react";
import './ProjectCard.css'
import { FaGithub, FaEllipsisH, FaGlobe } from 'react-icons/fa';

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
    var body = document.getElementsByTagName('body')[0];
    if (popUp) {
      popUp.style.display = "block";
      body.style.overflow = "hidden";
    }
  };

  let thumbnail;
  if(1 === 0) { //TODO: add video
     thumbnail = <video></video>
  } else {
    thumbnail = <img alt={name} className="Card_bottom-image" src={images[0]}/> 
  }

  return (
    <div className="Card">  
      <div className='Card_top'>
        <h2>{name}</h2>
        <hr />  
      </div>
      <div className='Card_bottom'>   
        {thumbnail}  
        <p>{description}</p>
        <div>
          <div>
            <div className="Card_bottom_detailsDiv">
              <p 
                className={`properSpacing Card_bottom_detailsDiv_status ${status === 'Completed' ? 'statusDone' : 'statusInDev'}`}>{status}</p>
              <button onClick={callChangePopUp} className="Card_bottom_detailsDiv_button properSpacing">< FaEllipsisH className="icon" />Details</button>
            </div>
            <div className="Card_bottom_linksDiv">
              {(link === null) ? null : <a className="websiteLink properSpacing" href={link}><FaGlobe className="icon" />Website</a> }
              <a className="githubLink properSpacing" href={githubPage}><FaGithub className="icon" />Github Page</a>
            </div>
          </div>
        </div>
      </div>        
    </div>
  );
}

export default ProjectCard;