import "./App.css";
import HomePage from "./containers/HomePage/index";
import { UserPage } from "./containers/UserPage/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/user/:userId" component={UserPage} />
          <Route>404 not found!</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
