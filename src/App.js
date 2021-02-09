import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import { Context } from "./components/CartContext/CartContext";
import ItemDetailContainer from "./components/ItemDatailContainer/ItemDetailContainer";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <Context>
        <NavBar/>
        <Switch>
          <Route path="/item/:itemId">
            <ItemDetailContainer />
          </Route>
          <Route path="/category/:categoryId">
            <ItemListContainer greetings="IT-Resources Tienda Online"/>
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <ItemListContainer greetings="IT-Resources Tienda Online"/>
          </Route>
        </Switch>    
      </Context>
    </BrowserRouter>
    </div>
  );
}

export default App;
