import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/header";
import Content from "./components/content";
import Navigation from "./components/navigation";

import config from "./config";

import AddResidences from "./pages/add-residences/add-residences";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header>
          <Navigation config={config} />
        </Header>
        <Content>
          <Switch>
            <Route path="/residences/add" exact={true}>
              <AddResidences />
            </Route>
            <Route path="/residences">LIST RESIDENCES</Route>
            <Route path="/">HOME</Route>
          </Switch>
        </Content>
      </Router>
    </div>
  );
};

export default App;
