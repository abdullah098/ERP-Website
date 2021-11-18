import { Switch, Route } from 'react-router-dom';
import Home from './Components/HomeComponent/Home';
import NavBar from './Layouts/NavBar';
import Footer from './Layouts/Footer.jsx';
import AboutUs from './Pages/AboutUs/index';
import Features from './Pages/Features/index';
import Pricing from './Pages/Pricing/index.jsx';
import ContactUs from './Pages/ContactUs';
import ContactInformation from './Pages/Pricing/ContactInformation.jsx';
import Message from './Assets/message.svg';

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
        <Route exact path="/pricing-plan" component={Pricing} />
        <Route exact path="/contactUs" component={ContactUs} />
        <Route exact path="/pricing-plan/:id" component={ContactInformation} />
      </Switch>

      <Footer />

      <div className="message-icon">
        <img src={Message} alt="aaa" />
      </div>


    </>
  );
}

export default App;
