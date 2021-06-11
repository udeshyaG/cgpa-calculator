import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DisplayCgpa from './routes/DisplayCgpa';
import Home from './routes/home';

function App() {
  return (
    <Router>
      <h1 className='text-center text-white mt-4 app-heading'>
        CGPA Calculator
      </h1>
      <div className='App app-content'>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/display-cgpa/:studentName' exact>
            <DisplayCgpa />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
