/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <a name="aboutme" />
      <Skills />
      <a name="contact" />
      <Footer />
    </div>
  );
}

export default App;
