import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo";
import Header from "./components/header";
import Content from "./components/content";
import Navigation from "./components/navigation";

import config from "./config";

import AddResidences from "./pages/add-residences/add-residences";
import Residences from "./pages/residences/residences";

const App = () => {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Router>
          <Header>
            <Navigation config={config} />
          </Header>
          <Content>
            <Switch>
              <Route path="/residences/add" exact={true}>
                <AddResidences />
              </Route>
              <Route path="/residences">
                <Residences
                  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `500px` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                />
              </Route>
              <Route path="/">HOME</Route>
            </Switch>
          </Content>
        </Router>
      </ApolloProvider>
    </div>
  );
};

export default App;
