import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";


import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";

const Routes = () =>{
    return (
        <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/favoritos" component={Favoritos}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;