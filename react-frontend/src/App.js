import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import PrivateChef from './Pages/PrivateChef';
import Consulting from './Pages/Consulting';
import PopUps from './Pages/PopUps';
import Menu from './Pages/Menu';
import Partners from './Pages/Partners';
import Contact from './Pages/Contact';
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
