import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from './pages/home/Home'
import Subreddit from './pages/subreddit/Subreddit';
import TopMenu from "./components/topmenu/TopMenu";

function App() {
  return (
      <>
        <TopMenu/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/subreddit/:subredditId">
              <Subreddit />
          </Route>
        </Switch>
      </>
  );
}

export default App;
