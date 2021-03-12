import './App.css';
import Router from './Router/Router';
import { useHistory } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
      <div className="app-container">
        <Router />
    </div>
  )
}

export default App;
