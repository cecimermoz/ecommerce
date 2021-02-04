import React, {useState,useEffect} from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDatailContainer/ItemDetailContainer"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Context } from "./components/CartContext/CartContext";
import Cart from "./components/Cart/Cart";
import {getFirestore} from "./firebase";
import { LoaderGif } from "./components/loader-gif-style";


function App() {
    const [loading, setLoading] = useState(true);
    const [listaObjetos, setListaObjetos] = useState([]);

  useEffect(() => {
    let db = getFirestore();
    let itemsDb = db.collection('items');
    itemsDb.get()
      .then((queryDb)=>{
        queryDb.size === 1 && console.log('No results on the DataBase');
        let arrayItems = queryDb.docs.map(doc => {
            return{
              id: doc.id,
              ...doc.data()
            }
          });
        setListaObjetos(arrayItems);
      })
      .catch((error) => console.log(error))
      .finally(
        setLoading(false)
      )
  },[]);

  const categories = [
    {
      name: "Accesorios",
      id: "accesorios"
    },
    {
      name: "Hardware",
      id: "hardware"
    }
  ];
  return (
    loading ? <LoaderGif /> :
    <div className="App">
    <BrowserRouter>
      <Context>
        <NavBar categories={categories} />
        <Switch>
          <Route path="/item/:itemId">
            <ItemDetailContainer listaObjetos={listaObjetos} />
          </Route>
          <Route path="/category/:categoryId">
            <ItemListContainer greetings="IT-Resources Tienda Online" listaObjetos={listaObjetos}/>
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <ItemListContainer greetings="IT-Resources Tienda Online" listaObjetos={listaObjetos}/>
          </Route>
        </Switch>    
      </Context>
    </BrowserRouter>
    </div>
  );
}

export default App;
