import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import StreamCreate from './components/streams/StreamCreate';
import StreamDelete from './components/streams/StreamDelete';
import StreamEdit from './components/streams/StreamEdit';
import StreamList from './components/streams/StreamList';
import StreamShow from './components/streams/StreamShow';
import Navbar from './components/Navbar';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navbar />
          <div className="ui container">
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit" exact component={StreamEdit} />
            <Route path="/streams/delete" exact component={StreamDelete} />
            <Route path="/streams/show" exact component={StreamShow} />
          </div>
        </Router>
      </Provider>
    );
    };
  }

export default App;
