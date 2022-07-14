import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="content">
        <Navbar />
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
