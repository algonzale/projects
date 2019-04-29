import React from 'react';
import ItemsCarousel from '../ItemsCarousel/ItemsCarousel.js';
import './CardPopUp.css';

const CardPopUp =({ project })=> {
  const { name, id, explanation, description, images } = project;

  const hidePopUp =()=> {
    let popUp = document.getElementById(`popup${id}`);
    popUp.style.display = "none";
  }

  if (name) {
    return (
      <div className="popup" id={`popup${id}`}>
        <div className="popup_header">
          <h1>{name}</h1>
          <span onClick={hidePopUp}>X</span>
        </div>
        <div className="popup_grid">
          <div className="popup_grid_explanation">
            <h2>{description}</h2>
            <p>{explanation}</p>
          </div>
          <div className="popup_grid_slideshow">
            <ItemsCarousel images={images}/>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default CardPopUp;