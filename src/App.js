import Main from './Main';
import Navbar from './Navbar';
import {BrowserRouter as  Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="content">
        <Navbar />
        <Main />
      </div>
    </div>
    </Router>
  );
}

export default App;
