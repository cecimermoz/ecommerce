import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDatailContainer/ItemDetailContainer"
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const listaObjetos = [
    {
        id: "abc001",
        title: "MOUSEPAD REDRAGON P029 Flick S",
        price: 959.53,
        stock: 3,
        initial: 1,
        description: null,
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_892778-MLA43833766719_102020-O.webp",
    },
    {
        id: "abc002",
        title: "TECLADO LOGITECH K120",
        price: 783.44,
        stock: 7,
        initial: 1,
        description: "Este teclado Logitech es el mejor complemento para hacer todo tipo de actividades. Es cómodo y práctico al momento de redactar documentos, navegar y hacer búsquedas por internet, ya sea en tu trabajo o en la comodidad del hogar",
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_815666-MLA32722390520_102019-O.webp",
    },
    {
        id: "abc003",
        title: "MOUSE LOGITECH M170 Wiireless",
        price: 975.71,
        stock: 9,
        initial: 1,
        description: "Sólida conexión inalámbrica estable a distancias de hasta 10 metros (33 ft). Sin apenas retrasos ni interferencias, el juego y el trabajo serán más previsibles.Pruebas realizadas a una distancia de 10 metros. El radio de acción inalámbrico puede variar ligeramente según las condiciones del equipo y el entorno.",
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_646248-MLA31037727069_062019-F.webp",
    },
    {
        id: "abc004",
        title: "PENDRIVE 64GB USB3.0 KINGSTON DTIG4",
        price: 1070.85,
        stock: 10,
        initial: 1,
        description: "Capacidad: 64GB Dimensiones: 55 mm x 21 mm x 10,1 mm Peso: 10,31 g Temperatura de funcionamiento: entre 0°C y 60°C Temperatura de almacenamiento: entre -20°C y 85°C",
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_708228-MLA42289464396_062020-O.webp",
},
  ];
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/item/:itemId">
          <ItemDetailContainer item={listaObjetos[2]} />
        </Route>
        <Route path="/">
          <ItemListContainer greetings="IT-Resources Tienda Online" listaObjetos={listaObjetos}/>
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
