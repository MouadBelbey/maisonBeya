import React from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Nav from './components/nav/Nav';
import Produit from './components/produit/Produit';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Produit />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
