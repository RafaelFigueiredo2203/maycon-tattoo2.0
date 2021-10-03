import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './global.scss';

import { Contact } from './pages/contact/contact';
import { Footer } from './pages/Footer';
import { Galery } from './pages/galery/galery';

import { Header } from './pages/Header';
import { Info } from './pages/Info/Info';

import { RenderPages } from './pages/RenderPages';

export default function App() {
  return (
   <>
   <HashRouter basename={process.env.PUBLIC_URL}>
   <Header/>
   <Switch>
   <Route exact path="/" component={RenderPages}/>
   <Route exact path="/info" component={Info}/>
   <Route exact path="/galery" component={Galery}/>
   <Route exact path="/contact" component={Contact}/>
    </Switch>
    <Footer/>
    </HashRouter>
   </>
  );
}


