import { useState } from "react";
import "./App.css";

import { Skills } from "./Components/Skills";
import { TimeLine } from "./Components/TimeLine";
import { ItchLink } from "./Components/ItchLink";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
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
