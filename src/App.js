import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/home/Home'
import Subreddit from './pages/subreddit/Subreddit';
import TopMenu from "./components/topmenu/TopMenu";

function App() {
  return (
      <>
    <Router>
        <TopMenu/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/subreddit/:subredditId">
              <Subreddit />
          </Route>
        </Switch>
      </Router>
      </>
  );
}

export default App;
