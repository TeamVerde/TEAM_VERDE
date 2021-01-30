import './styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/header'
import Landing from './components/landing'

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Landing/>
    </div>
    </Router>
  );
}

export default App;
