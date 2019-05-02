import React, { Component } from 'react';
import ItemsCarousel from '../ItemsCarousel/ItemsCarousel.js';
import './CardPopUp.css';

class CardPopUp extends Component {

  hidePopUp =()=> {
    let popUp = document.getElementById(`popup${this.props.project.id}`);
    var body = document.getElementsByTagName('body')[0];
    popUp.style.display = "none";
    body.style.overflow = "";
  } 

  componentDidUpdate(prevProps) {
    if (this.props.project !== prevProps.project) {
      let popUp = document.getElementById(`popup${this.props.project.id}`);
      var body = document.getElementsByTagName('body')[0];
      popUp.style.display = "block";
      body.style.overflow = "hidden";
    }
    this.changeCoordinates();
  }

  changeCoordinates =()=> {
    var popup = document.getElementById(`popup${this.props.project.id}`);
    let topCoordinate = window.pageYOffset;
    popup.style.top = topCoordinate + 10 + 'px';
  }

  render() {
    const { name, id, explanation, description, images, technologies } = this.props.project;

    if (name) {
      return (
        <div className="popup" id={`popup${id}`}>
          <div className="popup_header">
            <h1>{name}</h1>
            <button className="popup_header_close" onClick={this.hidePopUp}>X</button>
          </div>
          <div className="popup_technologies">
            {
              technologies.map(technology => {
                return (
                  <div className="popup_technologies_container">
                    <img src={technology.image} alt={technology.name} className="popup_technologies_image"></img>
                  </div>
                );
              })
            }
          </div>
          <div className="popup_grid">
            <div className="popup_grid_explanation">
              <h2>{description}</h2>
              <p className="popup_grid_explanationTxt" >{explanation}</p>
            </div>
            <div className="popup_grid_slideshow">
              <ItemsCarousel images={images}/>
            </div>
          </div>
        </div>
      );
    } else {
      return <div id={`popup${id}`}></div>;
    }
  }
}

export default CardPopUp;