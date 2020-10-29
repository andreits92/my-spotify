import { Route, Switch } from 'react-router-dom';
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import Callback from "./pages/Callback/Callback";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
            path="/"
            exact={true}
            render={() => (<h1>Base route</h1>)}
        />
        <Route
            path="/home"
            component={Home}
        />
        <Route
            path="/login"
            component={Login}
        />
        <Route
            path="/contact"
            component={Contact}
        />

        {/* Authentication */}
        <Route
            path="/callback"
            component={Callback}
        />
        {/* 404 */}
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
