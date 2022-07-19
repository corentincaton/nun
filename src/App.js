import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import PrivateChef from './PrivateChef';
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
        </Routes>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
