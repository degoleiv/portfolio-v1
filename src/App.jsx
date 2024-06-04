import { useState } from "react";
import "./App.css";

import { Skills } from "./components/Skills";
import { TimeLine } from "./components/TimeLine";
import { ItchLink } from "./components/ItchLink";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
function App() {
  const [stateDark, setDark] = useState(false);

  return (
    <>
      <div className={stateDark ? "dark-mode" : "light-mode"}>
      <div>
        {stateDark ? "Mode Dark" : "Mode Light"}
        <label className="switch">
          <input
            type="checkbox"
            checked={stateDark}
            onChange={() => setDark(!stateDark)}
          />
          <span className="slider round"></span>
        </label>
        </div>
        


        <div className="layout">
        <Header/>
        <main>
          <Skills />
          <article>
            <h2>Backend Projects</h2>
          </article>
          <article>
            <h2>Interactive Projects</h2>
            <ItchLink />
          </article>
          <TimeLine/>
        </main>
        <Footer/>
        </div>
       
      </div>
    </>
  );
}

export default App;
