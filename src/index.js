import React from 'react';
import ReactDOM from 'react-dom';

import  { PrimaryButton, SecondaryButton, TertiaryButton } from './components/Button';

const App = () => (
  <div>
    <PrimaryButton>Hello world</PrimaryButton>
    <SecondaryButton>Goodbye world</SecondaryButton>
    <TertiaryButton>Hey world</TertiaryButton>
  </div>
)
ReactDOM.render(<App />, document.getElementById('root'));
