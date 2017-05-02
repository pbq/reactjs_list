import React from 'react'
import {render} from 'react-dom'
import OnLikeComponent from './onLikeComponent.jsx'

const App = () => {
  return (
    <div>
      <h1>Hello world !</h1>
      <OnLikeComponent />
    </div>
  )
}

render(<App />, document.getElementById('app'))
