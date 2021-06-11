import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Contributors } from './components/Contributors';
import { YunusOzdemir } from './components/Contributors/YunusOzdemir';
import { OnurhanDemir } from './components/Contributors/OnurhanDemir';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata' component={FetchData} />
            <Route path='/Contributors/' component={Contributors} />
            <Route path='/Contributors/YunusOzdemir' component={YunusOzdemir} />
            <Route path='/Contributors/OnurhanDemir' component={OnurhanDemir} />
      </Layout>
    );
  }
}
