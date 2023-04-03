import './App.css';

// import PropTypes from 'prop-types'
import React, { Component } from 'react'
// import { Clock, Preview } from './sandbox/Clock';
// import UseRefSample from './components/UseRefSample';
import Counter from './components/UseRefSample2';
import UseRefSample3 from './components/UseRefSample3';
// import MeasureExample from './components/UseCallbackSample2';
// import FetchSample from './components/FetchSample';

export class App extends Component {
  // static propTypes = {}

  render() {
    return (
      <div className="App">
        {/* <h1>React Summary</h1>*/}
        {/*<UseRefSample /> */}
        {/*<MeasureExample />*/}
        {/*<FetchSample /> */}
        {/* <Counter /> */}
        {/* <Clock /> */}
        {/* <Preview /> */}
        <UseRefSample3 />

      </div>
    )
  }
}

export default App;