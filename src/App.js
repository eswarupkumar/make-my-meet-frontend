import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./components/homepage";
import CreatePoll from "./components/create-poll";

function App() {
  return (
    <>
      <Router>
        <Route path="/" component={Homepage} exact />
        <Route path="/create-poll" component={CreatePoll} exact />
      </Router>
    </>
  );
}

export default App;
