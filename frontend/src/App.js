import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Navbar from './components/Navbar';
import GetCampaigns from './components/GetCampaigns';
import CreateCampaign from './components/CreateCampaign';
import UpdateCampaign from './components/UpdateCampaign';
import CampaignUpdated from './components/CampaignUpdated';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container p-4">
        <Switch>
          <Route path="/" exact component={GetCampaigns}/>
          <Route path="/create" component={CreateCampaign}/>
          <Route path="/edit/:id" component={UpdateCampaign}/>
          <Route path="/updated/:id" component={CampaignUpdated}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
