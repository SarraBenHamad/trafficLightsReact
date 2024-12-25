import { useState } from 'react'

import './App.css'
import TrafficLights from './TrafficLights'
function App() {


  return (
    <>
      <TrafficLights  direction="toul"/>
      <TrafficLights direction="ordh"/>
      <TrafficLights  direction="toul"/>

    </>
  )
}

export default App
