import React from 'react';
import '../styles/gridimages.scss';
import tattoo1 from '../assets/imagens/tattoo1.jpeg'
import tattoo2 from '../assets/imagens/tattoo2.jpeg'
import tattoo3 from '../assets/imagens/tattoo3.jpeg'
import tattoo4 from '../assets/imagens/tattoo4.jpeg'
import tattoo5 from '../assets/imagens/tattoo5.jpeg'
import tattoo6 from '../assets/imagens/tattoo6.jpeg'
import tattoo7 from '../assets/imagens/tattoo7.jpeg'
import tattoo8 from '../assets/imagens/tattoo8.jpeg'
import Logo from '../assets/imagens/tatto.png';
import LightSpeed from 'react-reveal/LightSpeed';


export function GridImages(){
  return(
    <div className="Gridimages">
      
       
        
      <div>
      <LightSpeed left>

      <img className="tatoo" src={tattoo1} alt=""/>
      <img className="tatoo" src={tattoo2} alt=""/>
      <img className="tatoo" src={tattoo3} alt=""/>
      <img className="tatoo" src={tattoo4} alt=""/>
      </LightSpeed>
   
      </div>
    
      
      <div>
      <LightSpeed right>
      <img className="tatoo" src={tattoo5} alt=""/>
      <img className="tatoo" src={tattoo6} alt=""/>
      <img className="tatoo" src={tattoo7} alt=""/>
      <img className="tatoo" src={tattoo8} alt=""/>
      </LightSpeed>
      </div>
     
    </div>
  );
}