import './index.css';
import React, {useState, useRef, useEffect} from 'react';
import { gsap} from 'gsap';


function App() {

  const [toggle, setToggle] = useState(false); // on le fait démarrer à false

  const changeState = () => {   // fonction qui sert à changer le state, setToggle inverse de toggle
    setToggle(!toggle)          // fonction qu'on passe à notre carte quand on veut cliker dessus
  }

  const cardRef = useRef(null) // Nous permet de sélectionner un element du DOM ( ex: la 'div' 'card'), retourne un Objet avec la propriete Current
 

  useEffect(()=>{               
    toggle ? 
    gsap.to(cardRef.current, {
      scale: 1.5,
      rotate: 360,
      duration: 1.2
    })
    :
    gsap.to(cardRef.current, {
      scale : 1,
      rotate : 0,
      duration : 1.2
    })
  }, [toggle]) // [] surveille mon state toggle, et dès qu'il change le useEffet s'exécute

  return (
    <div className="App">
    <div className="card" onClick={changeState} ref={cardRef}>
      NEW YORK
    </div>
    </div>
  );
}

export default App;
