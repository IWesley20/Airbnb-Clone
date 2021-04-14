import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import Footer from './components/Footer';
import "./style.css";

export default function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route path="/search">
          <SearchPage />
        </Route>

        <Route path="/" >
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
