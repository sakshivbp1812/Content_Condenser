import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import VideoSearch from "./components/VideoSearch";
import VideoPlayer from "./components/VideoPlayer";
import Login from "./components/Login";
import Registration from "./components/Registration";
import SummariesPage from "./components/SummariesPage";
import About from './components/About';
import Home from './components/Home'; // Import the Home component
import Landing from "./components/Landing";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <div className="content">
          <Switch>
          <Route path="/" exact component={Landing} />
        <Route path="/home" component={Home} />
            <Route path="/videos" component={VideoPlayer} />
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
            <Route path="/summaries" component={SummariesPage} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
