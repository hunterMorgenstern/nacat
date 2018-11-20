import React from 'react';
import { render } from 'react-dom';

import Display from './components/Display';
import Header from './components/Header';

const App = () => (
  <div>
    {/* <Display /> */}
    <Header />
  </div>
);

render(<App />, document.getElementById('app'));

export default App;
