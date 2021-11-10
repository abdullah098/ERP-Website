import { Switch, Route } from 'react-router-dom';
import Home from './Components/HomeComponent/Home';

import './App.scss';
import NavBar from './Layouts/NavBar';

function App() {
  return (
    <>
      <NavBar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
      </Switch>
    </>
  );
}

export default App;
