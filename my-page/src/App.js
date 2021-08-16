import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import PageBegin from './pages/PageBegin';
import PageProjects from './pages/PageProjects';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={PageBegin} />
        <Route path="/projects" component={PageProjects} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
