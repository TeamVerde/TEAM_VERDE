import './styles/App.css';
import {ReactComponent as BGCurve} from './assets/bg-curve.svg';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/header'
import Body from './components/body'

function App() {
  return (
    <Router>
    <div className="App">
      <BGCurve/>
      <Header/>
      <Body/>
    </div>
    </Router>
  );
}

export default App;
