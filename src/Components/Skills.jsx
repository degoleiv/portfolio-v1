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
import './Skills.css'
export function Skills({title}) {
  return (
    <article className="skills">
  <h2>{title}</h2>
  <ul>
    <li>
      <FontAwesomeIcon icon={faUnity} /> Unity
    </li>
    <li alt="React">
      <FontAwesomeIcon icon={faReact} /> React
    </li>
    <li alt="HTML, JS, CSS">
      <FontAwesomeIcon icon={faHtml5} /> 
      <FontAwesomeIcon icon={faJs} /> 
      <FontAwesomeIcon icon={faCss3} /> HTML5, CSS3, JavaScript
    </li>
    <li alt="C#">
      <FontAwesomeIcon icon={faC} /> 
      <FontAwesomeIcon icon={faHashtag} /> 
    </li>
    <li alt="Python">
      <FontAwesomeIcon icon={faPython} /> Python
    </li>
    <li alt="Java">
      <FontAwesomeIcon icon={faJava} /> Java
    </li>
    <li alt="Database">
      <FontAwesomeIcon icon={faDatabase} /> Redis
    </li>
    <li alt="Database">
      <FontAwesomeIcon icon={faDatabase} /> Mongo
    </li>
    <li alt="Database">
      <FontAwesomeIcon icon={faDatabase} /> PostGresql
    </li>
    <li alt="Database">
      <FontAwesomeIcon icon={faDatabase} /> Mysql
    </li>
    <li alt="Git">
      <FontAwesomeIcon icon={faGit} /> Git
    </li>
    <li alt="Docker">
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
