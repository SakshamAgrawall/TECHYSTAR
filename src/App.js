import { Routes ,Route , BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import "./style/App.scss";
import "./style/Header.scss";
import "./style/Home.scss";

function App() {
  return (
   <Router>
    <Header/>
    <Routes >
      <Route path="/" element={<Home/>} />
    </Routes>
   </Router>
  );
}

export default App;
