import './App.css';
import Home from './components/home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/layout';
import About from './About';
import Knowledge from './knowledge';
import Experience from './experience';
import Contact from './contact';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/knowledge' component={Knowledge} />
          <Route exact path='/education' component={Experience} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
