import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Service from './Service'
import Portfolio from './Portfolio'
import Shop from './Shop'
import Navbar from './Navbar'
import Footer from './Footer'
import Data from './Data.json'
import {Switch, Route, Redirect} from 'react-router-dom'

const App = () => {
  return(
    <>
   
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/Service" component={Service}/>
        <Route exact path="/Portfolio" component={Portfolio}/>
        <Route exact path="/Shop" component={Shop}/>
        <Route exact path="/Contact" component={Contact}/>
        <Redirect to="/"/>
        <Home/>
    </Switch>
    </>
  );
}
export default App;
