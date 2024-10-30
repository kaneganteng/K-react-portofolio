import React from 'react'

const Resume = () => {
  return (
    <div className="container">
      {/* link to the resume */}
      <h3>Coding Skills</h3>
      <a href="https://docs.google.com/document/d/1EpYghTKmF4ip85LvZLDX11zDCFl9O59WZOX21zuSFjk/edit?usp=sharing">Kane Esasta Resume <span>&#40;</span>Click Me!!!<span>&#41;</span></a>

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

export default Resume