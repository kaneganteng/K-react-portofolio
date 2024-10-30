import React from 'react'
import myImage from '../asset/RainbowMountainKane.jpeg';

const AboutMe = () => {
  return (
    <div className="container">
        <h1>About Me</h1>
        <img src={myImage} alt="Picture of Kane Esasta on the peak of Rainbow Mountain in Peru" width="300" height="400" />
        <p>Hi! My name is Kane Esasta, a fresh student who enrolled in edX Boot Camps LLC for full stack development through University of Central Florid <span>&#40;</span>UCF<span>&#41;</span>.
           I am passionate to learn and work in the coding field. I will earn my certificate after finishing this boot camp in december 2024.
           Before going into the bootcamp, I went to Temple University in Philadelphia and earned my Bachelor of Science in Health Professions which is very unrelated to programming.
           I enrolled myself in a bootcamp in the hope of learning something new and get a certificate while at it. Hopefully, after finishing this semester with the boot camp, I will gain the skills that I can use in the working field.
           Certainly, feel free to reach out to me if you have something to teach me relating to code, job opportunities that I may be eligible for or even opportunities where I can get coding training on the job and hired after. 
        </p>
    </div>
  )
}

export default AboutMe