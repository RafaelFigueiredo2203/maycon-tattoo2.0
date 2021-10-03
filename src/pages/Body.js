import React from 'react';
import '../styles/body.scss';
import Logo from '../assets/imagens/tatto.png';
import Maycon from '../assets/imagens/maycon.jpeg';


export function Body(){
  return(
    <div className="bodydiv">
      
        <div className="first">
            <img className="maycon" src={Maycon} alt="maycon"/>
        </div>

        <div className="second">
                <img src={Logo} className="logo" alt="logo"/>

                  <h3>Olá meu nome é Maycon Mendes , faço desenhos desde minha infância, desde então
        decidi entrar no mercado de trabalho como tatuador e sempre fui apaixonado pelo
        meu trabalho e faço com muita dedicação e responsabilidade ,sempre buscando evoluir
        cada vez mais ,atualmente moro em Ourinhos/SP,
        sejam bem-vindos e fique a vontade para agendar sua Tattoo com um preço ótimo.
        Obrigado pelo interesse!</h3>
        </div>
    </div>
  );
}