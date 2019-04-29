import React, { Component } from 'react';
import projects from './data/projects.js';
import Header from './Components/Header/Header.js';
import ProjectList from './Components/ProjectList/ProjectList.js';
import CardPopUp from './Components/CardPopUp/CardPopUp.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      PopUp: {}
    }
  }

  changePopUp =(id)=> {
    const popup = projects.filter(project => project.id === id);
    this.setState({ PopUp: popup[0] });
  }

  render() {
    return (
      <div className="main">
        <Header />
        <CardPopUp project={this.state.PopUp} />  
        <ProjectList projects={projects} changePopUp={this.changePopUp}/>
      </div>
    );
  }
}

export default App;
