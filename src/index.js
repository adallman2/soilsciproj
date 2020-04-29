import React from 'react';
import ReactDOM from 'react-dom';
import Collapsible from './Collapsible.js';
import { Container, Row, Col } from 'reactstrap';
import './index.css';
import * as serviceWorker from './serviceWorker';
import InfoRow from './InfoRow.js';
import infoJSON from './data.json';

ReactDOM.render(
  <React.StrictMode>
  <div>
    <h1>Causes of Coral Bleaching</h1>
    <h3>Prepared by Jeff Kim</h3>
    <InfoRow info={[infoJSON.Causes[0], infoJSON.Causes[1], infoJSON.Causes[2]]}></InfoRow>
    <InfoRow info={[infoJSON.Causes[3], infoJSON.Causes[4], infoJSON.Causes[5]]}></InfoRow>
  </div>,

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
