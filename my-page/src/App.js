import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import PageBegin from './pages/PageBegin';
import PageFormation from './pages/PageFormation';
import PageProjects from './pages/PageProjects';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={PageBegin} />
        <Route path="/projects" component={PageProjects} />
        <Route path="/formation" component={PageFormation} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
