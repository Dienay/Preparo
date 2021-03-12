import './App.css';
import Router from './Router/Router';
import { useHistory } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import NavContext from './Contexts/NavContext';

function App() {
  const history = useHistory()

  const goToLogin = () => {
      history.replace("/login")
  }
  
  const goToSignup = () => {
      history.replace("/signup")
  }
  return (
    <NavContext.Provider value={{goToLogin: goToLogin, goToSignup: goToSignup }}>
      <div className="app-container">
        <Router />
    </div>
    </NavContext.Provider>
  )
}

export default App;
