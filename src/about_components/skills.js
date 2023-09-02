import "./skills.css";

export default function Skills() {

  const scrollToTop = () => {
    const element = document.getElementById('nav-bar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="skills-container">
      <h1>SKILLSET</h1>
      <div className="skills-content">
        <div className="column ">
          <div className="skill-container">
            <h2>Programming Languages</h2>
            <ul>
                <li>Python</li>
                <li>Javascript</li>
                <li>html</li>
                <li>CSS</li>
                <li>MATLAB</li>
            </ul>
          </div>
          <div className="skill-container">
            <h2>Professional Experience</h2>
            <ul>
                <li>DSTA Internship 2020</li>
                <li className="list-content">Worked with computer vision technologies to solve autonomous navigation problems.</li>
                <li>DSTA Internship 2023</li>
                <li className="list-content">Wrote a simulator program for testing task allocation algorithms</li>
                <li className="list-content">Designed and tested compliant mechanisms for wing structures</li>
                <li className="list-content">CAD modelling and 3D printing for robot retrofitting</li>
                <li>Airbus Internship 2023</li>
                <li className="list-content">Server-client scripting</li>
                <li className="list-content">CAD modelling and 3D printing for prototyping purposes</li>
                <li className="list-content">Implementation of 3D models in web applications</li>
            </ul>
          </div>
        </div>
        <div className="column ">
        <div className="skill-container">
            <h2>Other Skills</h2>
            <ul>
                <li>2D illustration (Procreate)</li>
                <li>3D modelling (Blender, Fusion 360)</li>
                <li>3D printing (Creality Ender V2 Neo)</li>
            </ul>
          </div>
        <div className="skill-container">
            <h2>Education</h2>
            <ul>
                <li>Self-taught in programming!</li>
                <li>Pursuing BS in Aerospace Engineering (4.94 GPA) at Nanyang Technological University</li>
            </ul>
          </div>
          <div className="skill-container">
            <h2>Technologies</h2>
            <ul>
                <li>Webdev</li>
                <li className="list-content">React, Tailwind</li>
                <li>Webscraping</li>
                <li className="list-content">Beautiful Soup</li>
                <li>Source Control</li>
                <li className="list-content">Git, GitHub</li>
                <li>Gamedev</li>
                <li className="list-content">Pygame</li>
                <li>Data Science</li>
                <li className="list-content">Matplotlib, Pandas, Numpy</li>
                <li>Image Processing and Computer Vision</li>
                <li className="list-content">OpenCV, PIL</li>
                <li>Mobile App Development</li>
                <li className="list-content">Flutter</li>
            </ul>
          </div>
        </div>
      </div>

      <svg onClick={scrollToTop} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="up_arrow">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>


    </div>
  );
}
