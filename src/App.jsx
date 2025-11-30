// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import "./App.css";
import Navbar from "./components/1header";
import Hero from "./components/2hero";
import Features from "./components/3features";
import Program from "./components/4program";
import Working from "./components/5working";
import About from "./components/6about";
import Faq from "./components/7FAQs";
import Footer from "./components/8footer";

export default function App() {
  return <div>
    <Navbar />
    <Hero />
    <Features />
    <Program />
    <Working />
    <About />
    <Faq />
    <Footer/>
  </div>;
}
