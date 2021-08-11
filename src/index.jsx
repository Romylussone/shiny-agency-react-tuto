import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import Home from './pages/Home/index.jsx'
import Survey from './pages/Survey/index.jsx'
import Freelances  from './pages/Freelances/index.jsx'
import Results from './pages/Results/index.jsx'

import Header from './components/Header/index.jsx'
import Error from './components/Error/index.jsx'

const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`

ReactDOM.render(
  <React.StrictMode> 
    <Router>
      <GlobalStyle/>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/survey/:questionNumber">
          <Survey/>
        </Route>
        <Route path="/freelances">
          <Freelances/>
        </Route>
        <Route path="/results">
          <Results/>
        </Route>
        <Route>
          <Error/>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);