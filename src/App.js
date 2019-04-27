import React, { Component } from 'react';
import Header from './Components/Header/Header.js';
import ProjectList from './Components/ProjectList/ProjectList.js';
import './App.css';

const projects = [
  {
    name: 'Project-Blue',
    description: 'Social Media/Advertising Webapp that shows you what you love!',
    key: 1,
    link: null,
    githubPage: 'https://github.com/kholland4/project-blue',
    isDone: false,
  },  
  {
    name: 'Savings Calculator React',
    description: 'A savings calculator made with React.js, and Node.js',
    key: 2,
    link: null,
    githubPage: 'https://github.com/algonzale/scalcreact',
    isDone: false,
  },
  {
    name: 'Robo Friends',
    description: 'A robot friend finding app made with React.js',
    key: 3,
    link: null,
    githubPage: 'https://github.com/algonzale/robofriends',
    isDone: true,
  },
  {
    name: 'Face Recognition App',
    description: 'A face recognition app made with React.js, and Express.js',
    key: 4,
    link: null,
    githubPage: 'https://github.com/algonzale/facerecognition',
    isDone: false
  },
]

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <ProjectList projects={projects}/>  
      </div>
    );
  }
}

export default App;
