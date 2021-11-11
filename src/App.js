import { Switch, Route } from 'react-router-dom';
import Home from './Components/HomeComponent/Home';
import NavBar from './Layouts/NavBar';
import Footer from './Layouts/Footer.jsx';
import AboutUs from './Components/AboutUs/AboutUs';

import './App.scss';



function App() {
  return (
    <>
      <NavBar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/aboutUs" component={AboutUs} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
