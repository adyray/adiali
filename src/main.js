import './_css/App.css';
import React from 'react'
import Navbar from './_content/main/navbar'
import Header from './_content/homepage/header'
import Services from './_content/homepage/services'
import Clients from './_content/homepage/work'
import Footer from './_content/main/footer'

function Main() {
  return (
    <div className="App">
      <Navbar/>
      <Header />
      <Services />
      <Clients />
      <Footer />
    </div>
  );
}

export default Main;
