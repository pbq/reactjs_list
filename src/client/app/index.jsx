import React from 'react'
import {render} from 'react-dom'
// import OnLikeComponent from './onLikeComponent.jsx'

/*
const App = () => {
   //React element can only return one element
  return (
    <div>
      <h1>Hello World !</h1>
      <OnLikeComponent />
    </div>
  )
}
*/
import App from './App.jsx'

render(<App />, document.getElementById('app'))
