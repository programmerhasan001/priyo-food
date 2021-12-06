import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar';
import Restaurant from './Components/Restaurant/Restaurant';
import NotFound from './Components/NotFound/NotFound';
import MealDetails from './Components/MealDetails/MealDetails';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={Restaurant} />
          <Route exact path="/restaurant" component={Restaurant} />
          <Route exact path="/mealinfo/:mealid" component={MealDetails} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
