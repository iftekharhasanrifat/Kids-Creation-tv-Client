import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Program from './Components/Program/Program';
import LiveProgram from './Components/LiveProgram/LiveProgram';
import UpcomingProgram from './Components/UpcomingProgram/UpcomingProgram';
import KidsNews from './Components/KidsNews/KidsNews';
import SingleNews from './Components/SingleNews/SingleNews';
import { BrowserRouter as Router, Switch , Route, Link } from "react-router-dom";
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/program">
            <Program/>
          </Route>
          <Route exact path="/liveProgram">
            <LiveProgram/>
          </Route>
          <Route exact path="/upcomingProgram">
            <UpcomingProgram/>
          </Route>
          <Route exact path="/kidsNews">
            <KidsNews/>
          </Route>
          <Route exact path="/kidsNews/:newsId">
            <SingleNews/>
          </Route>
          <Route exact path="/aboutUs">
            <AboutUs/>
          </Route>
          <Route exact path="/contactUS">
            <ContactUs/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
