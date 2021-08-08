import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import Filme from "./pages/Filme";
import NotFound from "./pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <div Style="display: grid; place-items: center;">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favoritos" component={Favoritos} />
          <Route exact path="/filme/:id" component={Filme} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
