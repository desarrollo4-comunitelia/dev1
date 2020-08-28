import React, { useState } from "react";
import "./App.css";
import ListOfImages from "./components/ListOfImages";
import { Link, Route } from "wouter";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/image/cats">Imágenes de gatos</Link>
        <Link to="/image/dogs">Imágenes de perros</Link>
        <Link to="/image/bird">Imágenes de pájaros</Link>
        <Route path="/image/:keyword" component={ListOfImages} />
      </section>
    </div>
  );
}

export default App;
