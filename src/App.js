import "./App.css";
import LandingPage from "./landingPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/layout";
import About from "./About";
import Knowledge from "./knowledge";
import Experience from "./experience";
import Contact from "./contact";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/portfolio" component={LandingPage} />
          <Route exact path="/portfolio/about" component={About} />
          <Route exact path="/portfolio/knowledge" component={Knowledge} />
          <Route exact path="/portfolio/education" component={Experience} />

          <Route exact path="/portfolio/contact" component={Contact} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
