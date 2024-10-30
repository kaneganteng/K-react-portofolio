import { useState } from 'react'

const Contact = () => {


  return (
    <div className="container-md">
      {/* title for Contact page */}
      <h2>Contact</h2>
      {/* Form for contact information that includes name, email, and some message for questions or comments */}
      <form>
        {/* Name and text-input section (required) */}
        <div>
          <label className="form-label">Name:</label>
          <input type="text" className="form-control" required />
        </div>
        {/* Email Address and type email input (required and needs to be in an email format) */}
        <div>
          <label className="form-label">Email Address:</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" Required />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div>
          <label className="form-label">Message:</label>
          <input type="message" className="form-control" aria-describedby="emailHelp" Required />
        </div>
        <button type="submit" className="btn btn-primary">SUBMIT</button>
      </form>
    </div>
  )
}

export default Contact