import React from "react";
import "./App.css";
import ListOfImages from "./components/ListOfImages";
import { Link, Route } from "wouter";
import Home from "./pages/Home";
import StaticContext from "./context/StatictContext";
import { DetalleImagenes } from "./pages/Detail";
import { ImageContextProvider } from "./context/ImageContext";

function App() {
  return (
    <StaticContext.Provider value={{ name: "Jesus", pruebaContext: true }}>
      <div className="App">
        <section className="App-content">
          <ImageContextProvider>
            <Route path="/" component={Home} />
            <Route path="/imagenes/:keyword" component={ListOfImages} />
            <Route path="/imagedetail/:keyword" component={DetalleImagenes} />
          </ImageContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
