import React from 'react';
import '../styles/preend.scss';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import cena from '../assets/imagens/cena.jpeg';



export function Preend(){
  return(
    <div className="body">
      <Fade left>
     <div className="frase">
        <Zoom>
       <h2>" A tatuagem é a essência do que só eu mesma sei sobre mim. <br/>É o meu poder , minha alma na minha pele. "  </h2>
       </Zoom>
     </div>
     </Fade>
      
      <div>
      <h3>Garanta sua tatuagem com a melhor qualidade </h3>
      <Zoom bottom>
        <img src={cena} alt="cena"/>
        </Zoom>
      </div>
        
    </div>
  );
}