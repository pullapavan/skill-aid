import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CustomTheme from '../src/context/materialcontext'


ReactDOM.render(
  <MuiThemeProvider theme={CustomTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
