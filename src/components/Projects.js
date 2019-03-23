import projects from '../data/projects.json';
import Project from './Project'
import React from 'react';

class Projects extends React.Component {
  render() {
    return (
      <div>
     {projects.allProjects.map(callAnything => {
       return <Project someValue={callAnything} />
     })}
     </div>
    )

  }
}

export default Projects