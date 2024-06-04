import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUnity,
  faReact,
  faHtml5,
  faJs,
  faCss3,
  faPython,
  faJava,
  faGit,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons/faDatabase";
import { faC, faHashtag } from "@fortawesome/free-solid-svg-icons";
import './Skills.css';

export function SkillsCom({ title }) {
  return (
    <article className="skills">
      <h2>{title}</h2>
      <ul>
        <li title="Unity">
          <FontAwesomeIcon icon={faUnity} /> Unity
        </li>
        <li title="React">
          <FontAwesomeIcon icon={faReact} /> React
        </li>
        <li title="HTML, JS, CSS">
          <FontAwesomeIcon icon={faHtml5} /> 
          <FontAwesomeIcon icon={faJs} /> 
          <FontAwesomeIcon icon={faCss3} /> HTML5, CSS3, JavaScript
        </li>
        <li title="C#">
          <FontAwesomeIcon icon={faC} /> 
          <FontAwesomeIcon icon={faHashtag} /> 
        </li>
        <li title="Python">
          <FontAwesomeIcon icon={faPython} /> Python
        </li>
        <li title="Java">
          <FontAwesomeIcon icon={faJava} /> Java
        </li>
        <li title="Redis">
          <FontAwesomeIcon icon={faDatabase} /> Redis
        </li>
        <li title="Mongo">
          <FontAwesomeIcon icon={faDatabase} /> Mongo
        </li>
        <li title="PostgreSQL">
          <FontAwesomeIcon icon={faDatabase} /> PostgreSQL
        </li>
        <li title="MySQL">
          <FontAwesomeIcon icon={faDatabase} /> MySQL
        </li>
        <li title="Git">
          <FontAwesomeIcon icon={faGit} /> Git
        </li>
        <li title="Docker">
          <FontAwesomeIcon icon={faDocker} /> Docker
        </li>
      </ul>
    </article>
  );
}


//  <li >
//             <FontAwesomeIcon icon={faBlender} />
//           </li>
//           <li >
//             <FontAwesomeIcon icon={faIllustrator} />
//           </li>
//           <li alt="Photoshop">
//             <FontAwesomeIcon icon={faPhotoshop} />
//           </li>
//           <li alt="Premiere">
//             <FontAwesomeIcon icon={faPremiere} />
//           </li>
