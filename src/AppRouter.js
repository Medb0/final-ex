import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Menu from "./routes/Menu";

const AppRouter = ({ isHome }) => {
  return (
    <Router>
      <Switch>
        {isHome ? (
          <Route exact path="/">
            <Home />
          </Route>
        ) : (
          <Route exact path="/">
            <Menu />
          </Route>
        )}
      </Switch>
    </Router>
  )
}

export default AppRouter