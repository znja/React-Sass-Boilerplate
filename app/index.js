import React from 'react';
import ReactDom from 'react-dom';
// Components
import HelloWorld from './components/helloWorld/helloWorld';
// Main scss
// require('style/url!file!../node_modules/normalize.css/normalize.css');
require('./style.scss');

const App = function () {
  return (
    <div>
      <HelloWorld name="Carlos Corvaia" />
    </div>
  );
};

ReactDom.render(<App />, document.getElementById('Application'));
