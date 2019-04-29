import React, { Component } from 'react';
import './ItemsCarousel.css';

class ItemsCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: props.images,
      image: props.images[0]
    }
  }

  //beacuse I am just hidding the popup, not rerendering it
  componentDidUpdate(prevProps) {
    if (this.props.images !== prevProps.images) {
      this.setState({ image: this.props.images[0] });
      this.setState({ images: this.props.images })
    }
  }

  changeImage =(value)=> {
    const index = this.props.images.indexOf(this.state.image);
    this.setState({ image: this.props.images[index + value] });
  }

  render() {
    const { images, image } = this.state;
    return (
      <div className="slideshow-container">
        <button
          className="slideshow-container-button" 
          onClick={()=> {this.changeImage(-1)}}
          disabled={images.indexOf(image) === 0}
          >{"Previous"}</button>
        <div>
          <img 
            className="slideshow-container-image"
            src={this.state.image} />
        </div>
        <button
          className="slideshow-container-button" 
          onClick={()=> {this.changeImage(1)}}
          disabled={images.indexOf(image) === images.length - 1}
          >{"Next"}</button>
      </div>
    );
  }
}

export default ItemsCarousel;