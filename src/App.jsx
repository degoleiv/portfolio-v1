import React, { useEffect, useState } from "react";
import "./App.css";

import { Skills } from "./components/Skills";
import { TimeLine } from "./components/TimeLine";
import { ItchLink } from "./components/ItchLink";
import { Footer } from "./components/Footer";
import {Header} from "./components/Header"; // Importar sin llaves si es un export por defecto
import data from './Logic/content.json'; // Importar como un objeto JSON

function App() {
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
          <Header title={stateData["title"]} subtitle={stateData["subtitle"]} description={stateData["description"]}/>
          <main>
            <Skills title={stateData["title-skills"]}/>
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
