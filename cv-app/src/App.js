import image from './photo_2023.png'
import './styles.css';
import {ContactInfo, Photo} from './components/ContactInfo'
import WorkExperience from './components/WorkExperience'

function App() {
  return (
    <div>
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
