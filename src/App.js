import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from './components/page1/Home';
import Product from './components/page1/Product'
import Member from './components/page1/Member'
import Contect from './components/page1/Contect'
import './App.css'

function App() {
  return (
    <div>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/member" component={Member}/>
          <Route path="/product" component={Product}/>
          <Route path="/contect" component={Contect}/>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
