import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './content.css';
import About from '../../components/about';
import Services from '../../components/services';

const Content = () => (
  <div className="content">
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/about"/>}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/services" component={Services}/>
    </Switch>
  </div>
);

export default Content;