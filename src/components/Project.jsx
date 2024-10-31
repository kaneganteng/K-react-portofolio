import React from 'react';
import EightBall from '../asset/8ball-image.png';
import WeatherForecast from '../asset/kWeatherForecast.png';
import ReadmeGenerator from '../asset/readmeGenerator.png';
import EmployeeTracker from '../asset/image.png';
import VehicleBuilder from '../asset/towtruck.jpg';
import ComingSoon from '../asset/ComingSoon.jpg';

// The six projects that should be portrayed on the Portfolio page
const Project = () => {
  const projects = [{
    name: "Magic 8 Ball",
    githubUrl: "https://github.com/ilPacoOG/magic-eightball.git",
    deployedUrl: "https://ilpacoog.github.io/magic-eightball/",
    image: EightBall
  }, {
    name: "K-Weather-Forecast",
    githubUrl: "https://github.com/kaneganteng/K-Weather-Forecast.git",
    deployedUrl: "https://k-weather-forecast.onrender.com/",
    image: WeatherForecast
  }, {
    name: "Best-README-Generator",
    githubUrl: "https://github.com/kaneganteng/Best-README-Generator.git",
    deployedUrl: "not deployed",
    image: ReadmeGenerator
  }, {
    name: "K-employee-tracker",
    githubUrl: "https://github.com/kaneganteng/K-employee-tracker.git",
    deployedUrl: "not deployed",
    image: EmployeeTracker
  }, {
    name: "Magic 8 Ball",
    githubUrl: "https://github.com/kaneganteng/Vehicle-Builder.git",
    deployedUrl: "not deployed",
    image: VehicleBuilder
  }, {
    name: "Coming soon!",
    githubUrl: "coming soon",
    deployedUrl: "coming soon",
    image: ComingSoon
  }
  ]
  
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">My Projects</h1>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={project.image} className="card-img-top" alt={project.name} style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a> |{' '}
                  {project.deployedUrl !== "not deployed" ? (
                    <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">Deployed App</a>
                  ) : (
                    <span>Not Deployed</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;




