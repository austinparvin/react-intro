import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import { render } from 'react-dom'
import Navigation from './components/Navigation'
import Octocats from './components/Octocats'

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Octocats />
      </>
    )
  }
}

export default App
