import Header  from "./components/Header/Header";
import Hero from "./components/Hero/hero"
import Companies from "./components/companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import Getstarted from "./components/GetStarted/Getstarted";
import Footer from  "./components/Footer/Footer"
import './App.css'
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies /> 
      <Residencies/>
      <Value />
      <Contact/>
      <Getstarted />
      <Footer/>
    
    </div>
  );
}

export default App;
