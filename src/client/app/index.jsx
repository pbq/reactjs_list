import React from 'react';
import {render} from 'react-dom';
import OnLikeComponent from './onLikeComponent.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <h1> Hello React!</h1>
        <OnLikeComponent />
      </div>
      );
  }
}

render(<App/>, document.getElementById('app'));
