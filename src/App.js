import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter } from 'react-router-dom';

import Header from './layout/header'
import Main from './components/main'
import Pricing from './components/pricing'
import Consult from './components/consult'
import Contacts from './components/contacts'

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Route path="/main" component={Main} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/consult" component={Consult} />
        <Route path="/contacts" component={Contacts} />
      </BrowserRouter>
    </div>
  );
}

export default App;
