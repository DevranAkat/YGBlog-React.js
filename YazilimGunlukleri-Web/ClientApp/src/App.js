import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { WeatherForecast } from "./components/WeatherForecast";
import { Counter } from "./components/Counter";
import { Contributors } from "./components/Contributors";
import { YunusOzdemir } from "./components/Contributors/YunusOzdemir";
import { OnurhanDemir } from "./components/Contributors/OnurhanDemir";
import { DevranAkat } from "./components/Contributors/DevranAkat";
import ErtugrulEmreCihan from "./components/Contributors/ErtugrulEmreCihan";
import { Blog } from './components/Blog';
import { BlogDetail } from './components/BlogDetail';
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import Authentication from "./components/Authentication";

export default class App extends Component {
  displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/WeatherForecast" component={WeatherForecast} />
        <Route path="/Contributors/" component={Contributors} />
        <Route path="/Contributors/DevranAkat" component={DevranAkat} />
        <Route path="/Contributors/YunusOzdemir" component={YunusOzdemir} />
        <Route path="/Contributors/OnurhanDemir" component={OnurhanDemir} />
        <Route path="/Contributors/ErtugrulEmreCihan" component={ErtugrulEmreCihan} />
        <Route path='/Blog' component={Blog} />
        <Route path='/BlogDetail/' component={BlogDetail} />
        <Route path="/Authentication/" component={Authentication} />
        <Route path="/Authentication/Login" component={Login} />
      </Layout>
    );
  }
}