import { Routes ,Route , BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact"
import Services from "./components/Services";


import "./style/App.scss";
import "./style/Header.scss";
import "./style/Home.scss";
import "./style/Footer.scss";
import"./style/Contact.scss";
import"./style/mediaQuery.scss";

function App() {
  return (
   <Router>
    <Header/>
    <Routes >
      <Route path="/" element={<Home/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Services" element={<Services/>} />
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
