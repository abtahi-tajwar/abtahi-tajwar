import { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";

function App() {
  const [navHeight, setNavHeight] = useState(128)
  useEffect(() => {
      if(window.innerWidth < 1080) {
        setNavHeight(64)
      }
  }, [])
  window.addEventListener('resize', () => {
      if(window.innerWidth < 1080) {
        setNavHeight(64)
      } else {
        setNavHeight(128)        
      }
  })
  return (
    <div className="App">
      <Header height={navHeight}/>
      <div style={{ marginTop: -navHeight+"px"}}>
        <Hero />
      </div>
    </div>
  );
}

export default App;
