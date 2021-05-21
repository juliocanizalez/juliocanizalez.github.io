import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../containers/Home'
import About from '../containers/About'
import Skills from '../containers/Skills'
import Portfolio from '../containers/Portfolio'
import Contact from '../containers/Contact'

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/skills" component={Skills} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </BrowserRouter>
)

export default App