import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Whatwedo from "./components/Whatwedo";
import Startcampaign from './components/Startcampaign';
function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={Navbar}></Route>
        <Route exact path='/whatwe' component={Whatwedo}></Route>
        <Route exact path="/startcampaign" component={Startcampaign}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
