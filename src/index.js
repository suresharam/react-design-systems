import React from 'react';
import ReactDOM from 'react-dom';

import  { PrimaryButton, SecondaryButton, TertiaryButton } from './components/Button';
import { GlobalStyles } from './utils';

const App = () => (
  <div>
    <PrimaryButton>Hello world</PrimaryButton>
    <SecondaryButton>Goodbye world</SecondaryButton>
    <TertiaryButton>Hey world</TertiaryButton>
    <GlobalStyles />
  </div>
)
ReactDOM.render(<App />, document.getElementById('root'));
