import React from "react";
import { Switch, Route } from "react-router-dom";

import YogaHome from "./components/yogaHome.jsx";
import YogaEditDelete from "./components/yogaEditDelete.jsx";
import YogaAdd from "./components/yogaAdd.jsx";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={YogaHome} />
    <Route exact path="/yoga/add" component={YogaAdd} />
    <Route exact path="/yoga/edit-delete/:id" component={YogaEditDelete} />
  </Switch>
);

export default Routes;
