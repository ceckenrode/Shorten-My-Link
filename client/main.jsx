import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import LinkCreate from './components/LinkCreate';
import LinkList from './components/LinkList';
import { Links } from '../imports/collections/links';

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <LinkCreate />
        <LinkList />
      </div>
    </div>
  )
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('app'));
})
