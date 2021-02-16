import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Album from './pages/Album'
import AlbumDetail from './pages/AlbumDetail'
import React from 'react';
import './App.css';
import { useState } from 'react'

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Album}></Route>
          <Route path="/album/:id" component={AlbumDetail}></Route>
          <Route path="/album/2" component={AlbumDetail}></Route>

        </Switch>
      </div>
    </Router>
  );
}
