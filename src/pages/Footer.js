import React from 'react';
import '../styles/footer.scss';
import FacebookRoundedIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';




export function Footer(){

 

  return(
    <div>
     
      <footer>
      <h3 >Entre em contato e faça já o seu orçamento! </h3>

        <div  className="socialMedia">
    
        <a target="_blank" href="https://www.facebook.com/MayconTATTOSTUDIO"> <FacebookRoundedIcon  className="icons" /></a>
        <a target="_blank" href="https://api.whatsapp.com/send?phone=5514997964970&text=Ol%C3%A1%20eu%20vim%20pelo%20novo%20site%20%2C%20gostaria%20de%20marcar%20uma%20tattoo!"> <WhatsAppIcon className="icons" /></a>
       
      
        </div>
      <h5>® 2021 Maycon Tattoo Studio.  Desenvolvido por <a target="_blank" href="https://github.com/RafaelFigueiredo2203">Rafa Figueiredo.</a></h5>
        </footer>
    </div>
  );
}