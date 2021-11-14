import { Switch, Route } from 'react-router-dom';
import Home from './Components/HomeComponent/Home';
import NavBar from './Layouts/NavBar';
import Footer from './Layouts/Footer.jsx';
import AboutUs from './Pages/AboutUs/index';
import Features from './Pages/Features/index';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './App.scss';




function App() {
  return (
    <>
      <NavBar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/aboutUs" component={AboutUs} />
        <Route exact path="/features" component={Features} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
