import { Route, Switch } from 'react-router-dom';
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Header from "./components/Header/Header";
import CallbackPage from "./pages/CallbackPage/CallbackPage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import PlaylistPage from './pages/PlaylistPage/PlaylistPage';
import {isTokenValid} from './utils/utils';
import './App.css';


function App() {
  const publicRoutes = (
    <div className="App">
        <Switch>
            <Route
                path="/"
                exact={true}
                component={LoginPage}
            />
            <Route
                path="/login"
                component={LoginPage}
            />
            {/* Authentication */}
            <Route
                path="/callback"
                component={CallbackPage}
            />
            {/* 404 */}
            <Route component={NotFoundPage} />
        </Switch>
    </div>
  );
  const authenticatedRoutes = (
    <div className="App">
      <Header />
      <Switch>
        <Route
          path="/login"
          component={LoginPage}
        />
        <Route
            path="/home"
            component={HomePage}
        />
        <Route
            path="/contact"
            component={ContactPage}
        />
        <Route
            exact
            path="/categories"
            component={CategoriesPage}
        />
        <Route
            path="/categories/:id"
            component={CategoryPage}
        />
        <Route
            path="/playlists/:id"
            component={PlaylistPage}
        />
        {/* 404 */}
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );

  let displayedRoutes;
  if (isTokenValid()) {
    displayedRoutes = authenticatedRoutes;
  } else {
    displayedRoutes = publicRoutes;
  }

  return <>{displayedRoutes}</>;
}

export default App;
