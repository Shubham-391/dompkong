import './App.css';
import React, { useEffect } from "react";
import Backtotop from './components/Backtotop';
import Header from './components/Header';
import Preloader from './components/Preloader';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import Section8 from './components/Section8';
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
 useEffect(() => {
   AOS.init();
 }, []);
  return (
    <>
      <Preloader/>
      <Header/>
      <Section1/>
      <Section2/>
      <Section3 />
      <Section4 />
      <Section5/>
      <Section6/>
      <Section7 />
      <Section8 />
      <Backtotop/>
    </>
  )
}

export default App
