import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
export function Footer ({title}){
    return (
        <footer>
        <p>{title}</p>
        <a href="mailto:degocyx1211@gmail.com" alt="Email" title="Email">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://github.com/degoleiv" alt="GitHub" title="GitHub">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/christiancontreras-gamedev/"
          alt="LinkedIn"
          title="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="tel:+573142455909" alt="Phone" title="Phone">
          <FontAwesomeIcon icon={faPhone} />
        </a>
      </footer>

    )
}