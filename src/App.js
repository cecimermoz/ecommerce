import React, {useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDatailContainer/ItemDetailContainer"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Context } from "./components/CartContext/CartContext";
import Cart from "./components/Cart/Cart";
import { LoaderGif } from "./components/loader-gif-style";


function App() {
  const [loading] = useState(true);
  const [listaObjetos] = useState([]);

  return (
    loading ? <LoaderGif /> :
    <div className="App">
    <BrowserRouter>
      <Context>
        <NavBar/>
        <Switch>
          <Route path="/item/:itemId">
            <ItemDetailContainer listaObjetos={listaObjetos} />
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
