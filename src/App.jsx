import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import Getstarted from "./components/GetStarted/Getstarted";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ width: "100%", height: "100%" }}>
              <div>
                <div className="white-gradient" />
                <Header />
                <Hero />
              </div>
              <Companies />
              <Residencies />
              <Value />
              <Contact />
              <Getstarted />
              <Footer />
            </div>
          }
        />

        <Route path="/login" element={<p style={{color:'#fff'}}>Login</p>} />
      </Routes>
    </div>
  );
}

export default App;
