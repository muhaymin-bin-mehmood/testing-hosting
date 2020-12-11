import React from 'react';
import ReactDOM from 'react-dom';

function Hi(){
  return <h1>Hello World!</h1>
}

ReactDOM.render(<Hi />, document.querySelector('#root'));