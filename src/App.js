import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import Home from "./components/home";
import About from "./components/about";
import Admin from "./components/admin";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import GlobalState from "./context/globalState";
import Cart from "./components/cart";

function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <div className="App">
          <NavBar></NavBar>

          <div className="container-fluid">
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/home" exact component={Home}></Route>
              <Route path="/catalog" exact component={Catalog}></Route>
              <Route path="/about" exact component={About}></Route>
              <Route path="/admin" exact component={Admin}></Route>
              <Route path="/cart" exact component={Cart}></Route>
            </Switch>
          </div>

          <Footer></Footer>
        </div>
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
