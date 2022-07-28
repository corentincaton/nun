import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import PrivateChef from './Components/PrivateChef';
import Consulting from './Components/Consulting';
import PopUps from './Components/PopUps';
import Menu from './Components/Menu';
import Partners from './Components/Partners';
import Contact from './Components/Contact';
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="content">
        <Navbar />
        <div className="Main">
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/private-chef" element={<PrivateChef />} />
           <Route path="/consulting" element={<Consulting />} />
           <Route path="/pop-ups" element={<PopUps />} />
           <Route path="/menu" element={<Menu />} />
           <Route path="/partners" element={<Partners />} />
           <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
