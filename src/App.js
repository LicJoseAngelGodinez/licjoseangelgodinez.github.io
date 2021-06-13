import React from 'react';
import NavMenu from './components/NavMenu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import SmoothScrollbar from './components/SmoothScrollbar';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <SmoothScrollbar>
          <Switch>
            <Route path="/acerca-de">
              <About />
            </Route>

            <Route path="/proyectos">
              <Projects />
            </Route>

            <Route path="/contacto">
              <Contact />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </SmoothScrollbar>
        <Footer />
      </Router>
    </>
  );
}
