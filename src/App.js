import Base from './jsx/layout/Base';
import './sass/global/global.css';
import Homepage from './jsx/pages/homepage/Homepage';
import React, { useState, useEffect } from 'react';


// Create context api here.
export const ResolutionContext = React.createContext();


function App() {
  const [isDesktop, setIsDesktop] = useState(true);
  window.addEventListener('resize', () => {
    Resolution()
    console.log('scrolling')
  })
  useEffect(() => {
    Resolution();
  }, [])
  function Resolution() {
    if (window.matchMedia("(min-width: 1087px)").matches) {
      /* La largeur minimum de l'affichage est 600 px inclus */
      setIsDesktop(true);
    } else {
      /* L'affichage est inférieur à 600px de large */
      setIsDesktop(false);
    }
  }
  // loading
  const [loading, setLoading] = useState(true);
  window.addEventListener('load', () => {
    setLoading(false);
  })
  return (
    <ResolutionContext.Provider value={isDesktop}>
      <div className="App">
        {
          loading ? <h2>Loading...</h2> : <Base>
            <Homepage></Homepage>
          </Base>
        }
      </div>
    </ResolutionContext.Provider>
  );
}

export default App;


