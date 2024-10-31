import React from 'react'

const Resume = () => {
  return (
    <div className="container">
      {/* link to the resume */}
      <h3>Coding Skills</h3>
      {/* Downloadable link to my resume PDF */}
      <a href="https://drive.usercontent.google.com/u/0/uc?id=1BEQ6WcmaAZt1HP6aEiMGFbcvTS0Q4rF-&export=download">Kane Esasta Resume <span>&#40;</span>Click Me!!!<span>&#41;</span></a>

{/* List of proficient skills in coding */}
      <ul className="list-group">
        <li className="list-group-item list-group-item-success">HTML5,</li>
        <li className="list-group-item list-group-item-success">CSS,</li>
        <li className="list-group-item list-group-item-success">JavaScript,</li>
        <li className="list-group-item list-group-item-success">NodeJs,</li>
        <li className="list-group-item list-group-item-success">SQL,</li>
        <li className="list-group-item list-group-item-success">PostgreSQL,</li>
        <li className="list-group-item list-group-item-success">TypeScript,</li>
        <li className="list-group-item list-group-item-success">Object-Oriented Programming,</li>
        <li className="list-group-item list-group-item-success">React.js,</li>
        <li className="list-group-item list-group-item-success">Prompt Engineering,</li>
        <li className="list-group-item list-group-item-danger">NoSQL,</li>  
        <li className="list-group-item list-group-item-danger">MERN</li>
        <li className="list-group-item list-group-item-danger">Python</li>    
      </ul>
    </div>
  )
}

export default Resume;