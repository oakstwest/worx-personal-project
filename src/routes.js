import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Products from "./components/Home/children/Products/Products";
import Login from "./components/Home/children/Login";
import Accessories from "./components/Home/children/Products/children/Accessories/Accessories";
import Blowers from "./components/Home/children/Products/children/Blowers/Blowers";
import blowerAccessories from "./components/Home/children/Products/children/Blowers/children/Accessories";
import blowerCordless from "./components/Home/children/Products/children/Blowers/children/Cordless";
import blowerElectric from "./components/Home/children/Products/children/Blowers/children/Electric";
import Chainsaws from "./components/Home/children/Products/children/Chainsaws/Chainsaws";
import PoleSaws from "./components/Home/children/Products/children/Chainsaws/children/PoleSaws";
import Jawsaws from "./components/Home/children/Products/children/Chainsaws/children/Jawsaws";
import chainsawAccessories from "./components/Home/children/Products/children/Chainsaws/children/Accessories";
import HedgeTrimmers from "./components/Home/children/Products/children/HedgeTrimmers/HedgeTrimmers";
import LawnMowers from "./components/Home/children/Products/children/LawnMowers/LawnMowers";
import Portable from "./components/Home/children/Products/children/Portable/Portable";
import PowerShare from "./components/Home/children/Products/children/PowerShare/PowerShare";
import PowerTools from "./components/Home/children/Products/children/PowerTools/PowerTools";
import Trimmers from "./components/Home/children/Products/children/Trimmers/Trimmers";
import WorkSupport from "./components/Home/children/Products/children/WorkSupport/WorkSupport";
import YardCarts from "./components/Home/children/Products/children/YardCarts/YardCarts";
import Cart from "./components/Home/children/Cart";
import Account from "./components/Home/Account";
import AccountForm from "./components/Home/AccountForm";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/products" component={Products} />
    <Route path="/accessories" component={Accessories} />
    <Route path="/blowers" component={Blowers} />
    <Route path="/blowersaccessories" component={blowerAccessories} />
    <Route path="/blowerscordless" component={blowerCordless} />
    <Route path="/blowerselectric" component={blowerElectric} />
    <Route path="/chainsaws" component={Chainsaws} />
    <Route path="/jawsaws" component={Jawsaws} />
    <Route path="/polesaws" component={PoleSaws} />
    <Route path="/chainsawsaccessories" component={chainsawAccessories} />
    <Route path="/hedgetrimmers" component={HedgeTrimmers} />
    <Route path="/lawnmowers" component={LawnMowers} />
    <Route path="/portable" component={Portable} />
    <Route path="/powershare" component={PowerShare} />
    <Route path="/powertools" component={PowerTools} />
    <Route path="/trimmers" component={Trimmers} />
    <Route path="/worksupport" component={WorkSupport} />
    <Route path="/yardcarts" component={YardCarts} />
    <Route path="/cart" component={Cart} />
    <Route path="/account" component={Account} />
    <Route path="/accountinfo" component={AccountForm} />
  </Switch>
);
