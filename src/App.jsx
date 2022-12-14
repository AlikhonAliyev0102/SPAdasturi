import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Category from './pages/Category';
import Retcipe from './pages/Retcipe';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className=" container content">
        <Switch>
          <Route exact path="/" component = {Home} />
          <Route path="/about" component = {About} />
          <Route path="/contacts" component = {Contact} />
          <Route path="/category/:name" component={Category}/>
          <Route path="/meal/:id" component={Retcipe}/>
          <Route component={NotFound}/>
        </Switch>
      </main>
      <Footer/>      
    </div>
  );
}

export default App;
