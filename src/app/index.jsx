import {
  Switch,
  Route,
  Redirect,
  HashRouter
} from "react-router-dom";

import BookDetailsPage from "../pages/BookDetailsPage";
import HomePage from "../pages/HomePage";

export default function App() {
  return (
    <HashRouter hashType={"noslash"}>
      <Switch>
        <Route path="/details">
          <BookDetailsPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
        <Redirect to={'/'} />
      </Switch>
    </HashRouter>
  );
}
