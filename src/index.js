import React from 'react';
import ReactDom from 'react-dom';
// Components
import HelloWorld from './components/helloWorld';
// Main scss
require('styles/style.scss');

const App = function () {
  return (
    <div>
      <HelloWorld name="Carlos Corvaia" />
    </div>
  );
};

ReactDom.render(<App />, document.getElementById('Application'));
