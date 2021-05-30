import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Contributors } from './components/Contributors';
import { YunusOzdemir } from './components/YunusOzdemir';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata' component={FetchData} />
        <Route path='/contributors' component={Contributors} />
        <Route path='/YunusOzdemir' component={YunusOzdemir} />
      </Layout>
    );
  }
}
