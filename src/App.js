
import './App.css';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import ToggleMode from './components/ToggleMode';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
  <>
  <Router>
    <Navbar title="TextUtil" aboutText="AboutUs" />
    <div className="container my-3" >
      <Routes>
        <Route path="/" element={<TextForm/>} />
        <Route path="/about" element={<AboutUs rangertype="Red Ranger" powerranger="SPD" />} />
      </Routes>
    </div>
    
    </Router>
    <div className="container my-3" >
    {/* <TextForm heading="Enter yout text to analyze"/> */}
    </div>
    {/* <ToggleMode/> */}
     
  </>
  );
}

export default App;
