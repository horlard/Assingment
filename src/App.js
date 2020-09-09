import React from 'react';
import Header from './components/header';
import DeliverySec from './components/deliverySec'
import QuickSearch from './components/quickSearch'
import Footer from './components/footer';
import Works from './components/Works'
import Schedule from './components/schedule'
import Process from './components/process'
import Partner from './components/partners'



function App() {
  return (
    <div className="App">
      <Header/>
      <DeliverySec/>
      <QuickSearch/>
      <Works/>
      <Schedule/>
      <Process/>
      <Partner/>
      <Footer/>
    </div>
  );
}

export default App;
