import image from './photo_2023.png'

import './styles.css';

function Counter() {
  return
}

function Photo(props) {
  return <img src={props.image} />
}

function ContactInfo() {
  return <div className="contact">
  <p className="title">Contact</p>
  <div className="contact-grid">
    <div>
      <p className="contact-heading">Adress</p>
      <p className="contact-item">Odessa, Ukraine</p>
    </div>
    <div>
      <p className="contact-heading">Phone</p>
      <p className="contact-item">+380963048542</p>
    </div>
    <div>
      <p className="contact-heading">E-Mail</p>
      <a
        href="mailto: vladlapitsky37@gmail.com"
        className="contact-item"
        id="contact-link"
      >
        vladlapitsky37@gmail.com
      </a>
    </div>
    <div>
      <p className="contact-heading">Facebook</p>
      <a
        href="https://www.facebook.com/Elstarion"
        className="contact-item"
        id="contact-link"
        target="_blank"
        rel="noreferrer"
      >
        facebook.com/Elstarion
      </a>
    </div>
  </div>
  <p className="title">Languages</p>
  <div>
    <p className="languages-items">Ukrainian - C2</p>
    <p className="languages-items">English - B2</p>
  </div>
</div>
}

function WorkExperience() {
  return <div className="rs-block">
  <p className="rs-titles" id="three">
    <a href="#three" className="label">
      C
    </a>
    Work Experience
  </p>
  <div className="exp-description">
    <p>
      <span>Name of employer:</span>{" "}
      <a
        href="https://www.angloeastern.com/"
        target="_blank"
        rel="noreferrer"
      >
        Anglo Eastern
      </a>
      , Odessa
    </p>
    <p>
      <span>Dates of employment:</span> 06/2019 - 12/2021
    </p>
    <p>
      <span>Job title:</span> 3rd Engineer
    </p>
    <p>
      <span>Job description:</span> Responsible for maintenance and repair of
      the mechanisms stated in the skills section. Carried out performance
      tests to track deviations in their work cycles.
    </p>
  </div>
  <div className="exp-description">
    <p>
      <span>Name of employer:</span>{" "}
      <a href="https://www.msc.com/" target="_blank" rel="noreferrer">
        MSC
      </a>
      , Odessa
    </p>
    <p>
      <span>Dates of employment:</span> 02/2013 - 01/2019
    </p>
    <p>
      <span>Job title:</span> Junior Engineer
    </p>
    <p>
      <span>Job description:</span> Learned various ship's systems and
      mechanisms. Responsible for fuel and water analysis. 3rd Engineer's
      assistant.
    </p>
  </div>
</div>
}

function App() {
  return (
    <div className="App">
      <div className="container font-Inter main-theme">
      <div className="left-section">
        <h1 className="name">
          Vladyslav <span>Lapytskyi</span>
        </h1>
        <Photo image={image}/>
        <ContactInfo/>
     
      </div>
      <div className="right-section">
        <div className="rs-block">
          <p className="rs-titles" id="one">
            <a href="#one" className="label">
              A
            </a>
            Summary
          </p>
          <p className="sumtext">
            I'm a former Marine Engineer with 8 years of experience. Throughout
            my marine career I've been working on different types of ships such
            as bulk carriers, containers, car carriers etc. Most of those ships
            were older than me, few of them were relatively new. My first
            voyages were about gaining experience by assisting to 3rd Engineer
            and working on such mechanisms as pumps, compressors, purifiers,
            diesel engines, boilers, fresh water generators, various safety
            equipment and so on. All of which eventually turned into my direct
            responsibility.
          </p>
        </div>
        <div className="rs-block">
          <p className="rs-titles" id="two">
            <a href="#two" className="label">
              B
            </a>
            Skills Highlights
          </p>
          <div className="split-list">
            <ul>
              <li>Pumps</li>
              <li>Compressors</li>
              <li>Diesel engines</li>
              <li>Boilers</li>
              <li>Purifiers</li>
              <li>FWG</li>
              <li>Safety equipment</li>
              <li>HTML</li>
            </ul>
          </div>
        </div>

        <WorkExperience/>

          <div className="rs-block">
            <p className="rs-titles" id="four">
              <a href="#four" className="label">
                D
              </a>
              Education
            </p>
            <div className="ed-description">
              <p>
                <span>Dates of studying:</span> from 2010 - to 2016
              </p>
              <p>
                <span>Name of institution:</span> National University "Odessa
                Maritime Academy"
              </p>
              <p>
                <span>Degree and major:</span> Sp.Ed., Marine Power Plant
                Operation &amp; Maintenance
              </p>
            </div>
          </div>
      </div>
    </div>
    </div>
  );
}

export default App;
