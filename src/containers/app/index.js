import React from 'react';
import Header from '../../components/header';
import Menu from '../../components/menu';
import Footer from '../../components/footer'
import Content from '../../containers/content';
import './app.css';

const App = () => (
  <div className="app">
    <Header
      header="NAYEEM H. ZEN"
      subheader="Software Consultant and Engineer"
    />
    <Menu/>
    <Content/>
    <Footer/>
  </div>
);

export default App;