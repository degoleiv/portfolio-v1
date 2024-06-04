import { useEffect, useState } from "react";
import "./App.css";

// import { SkillsCom } from "./components/Habilidad";
import { TimeLine } from "./components/TimeLine";
import { ItchLink } from "./components/ItchLink";
import { Footer } from "./components/Footer";
import HeaderTitle from "./components/HeaderTitle"; // Importar sin llaves si es un export por defecto

function App() {
  const data = {
    "English": {
        "dark": "Mode Dark",
        "light": "Modo Light",
        "spanish": "Spanish Mode",
        "english": "English Mode",
        "title": "GAME DEVELOPER AND SOFTWARE DEVELOPER",
        "subtitle": "Specialized Junior developer of software and interactive media",
        "description": "HELLO! I OPTIMIZE SYSTEMS AND PROCESSES FOR COMPANIES AND DEVELOPMENT TEAMS. WITH EXPERTISE IN BACKEND DEVELOPMENT AND LANGUAGES LIKE JAVA, PYTHON, JAVASCRIPT, AND C#, I'VE LED SUCCESSFUL PROJECTS IMPLEMENTING DOCKER, MICROSERVICES, AND DATABASES LIKE MYSQL, REDIS, MONGODB, AND POSTGRESQL. PASSIONATE ABOUT GAME DEVELOPMENT AND AUDIOVISUAL PRODUCTION, I OFFER CREATIVE SOLUTIONS INTEGRATING TECHNOLOGY WITH CAPTIVATING NARRATIVES. HOW CAN I HELP YOU TODAY?",
        "title-skills": "SKILLS",
        "title-project1": "Backend Projects",
        "title-project2": "Interactive Projects",
        "education-1": "Education",
        "contact": "Get In Touch"
    },
    "Español": {
        "dark": "Modo Oscuro",
        "light": "Modo Claro",
        "spanish": "Modo Español",
        "english": "Modo Ingles",
        "title": "DESARROLLADOR DE JUEGOS Y DESARROLLADOR DE SOFTWARE",
        "subtitle": "Desarrollador Junior especializado de software y medios interactivos.",
        "description": "¡HOLA! OPTIMIZO SISTEMAS Y PROCESOS PARA EMPRESAS Y EQUIPOS DE DESARROLLO. CON EXPERIENCIA EN DESARROLLO BACKEND Y LENGUAJES COMO JAVA, PYTHON, JAVASCRIPT Y C#, HE LIDERADO PROYECTOS EXITOSOS IMPLEMENTANDO DOCKER, MICROSERVICIOS Y BASES DE DATOS COMO MYSQL, REDIS, MONGODB Y POSTGRESQL. APASIONADO POR EL DESARROLLO DE JUEGOS Y LA PRODUCCIÓN AUDIOVISUAL, OFREZCO SOLUCIONES CREATIVAS INTEGRANDO TECNOLOGÍA CON NARRATIVAS CAUTIVADORAS. ¿CÓMO PUEDO AYUDARTE HOY?",
        "title-skills": "Habilidades",
        "title-project1": "Proyectos Backend",
        "title-project2": "Proyectos Interactivos",
        "education-1": "Educacion",
        "contact": "Ponerse en Contacto"
    }
}

  const [stateDark, setDark] = useState(false);
  const [stateLanguage, setLanguage] = useState(false);
  const [stateData, setData] = useState({}); // Inicializar como objeto vacío

  useEffect(() => {
    
    if (stateLanguage) {
      
      setData(data.English);
      console.log(data.English);
    } else {
      setData(data.Español);
      console.log(data.Español);
    }
  }, [stateLanguage]);

  return (
    <>
      
      <div className={stateDark ? "dark-mode" : "light-mode"}>
        <div>
          {stateDark ? stateData.dark : stateData.light}
          <label className="switch">
            <input
              type="checkbox"
              checked={stateDark}
              onChange={() => setDark(!stateDark)}
            />
            <span className="slider round"></span>
          </label>
        </div>

        <div>
          {stateLanguage ? stateData.spanish : stateData.english}
          <label className="switch">
            <input
              type="checkbox"
              checked={stateLanguage}
              onChange={() => setLanguage(!stateLanguage)}
            />
            <span className="slider round"></span>
          </label>
        </div>

        <div className="layout">
          <HeaderTitle title={stateData["title"]} subtitle={stateData["subtitle"]} description={stateData["description"]}/>
          <main>
            {/* <SkillsCom title={stateData["title-skills"]}/> */}
            <article>
              <h2>{stateData["title-project1"]}</h2> 
            </article>
            <article>
              <h2>{stateData["title-project2"]}</h2> 
              <ItchLink />
            </article>
            <article>
            <h2>{stateData["education-1"]}</h2>
            <TimeLine />
            </article>
            
          </main>
          <Footer title={stateData["contact"]} />
        </div>
      </div>
    
      
    </>
  );
}

export default App;
