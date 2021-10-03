import React from 'react';
import '../styles/princ.scss';


export function Header(){
  return(
    <div>
      <header className="headerapp">
        <h1>Maycon Tattoo Studio</h1>
      <nav class="nav">
										<a id="menu-toggle" class="anchor-link" href="#"><img src="images/nav.png" alt="" /></a>
										<ul class="nav-list" id="menu">
											<li><a href="/">Home</a></li>
											<li><a href="/Info" class="scroll">Informações</a></li>
											<li><a href="/galery" class="scroll">Galeria</a></li>
											<li><a href="/contact" class="scroll">Contato</a></li>
										</ul>
									</nav>
      </header>

     
    </div>

  );
}