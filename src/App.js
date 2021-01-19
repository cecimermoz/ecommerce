import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDatailContainer/ItemDetailContainer"

function App() {
  const listaObjetos = [
    {
        id: "abc001",
        title: "MOUSEPAD REDRAGON P029 Flick S",
        price: 959.53,
        stock: 3,
        initial: 1,
        description: null,
        pictureUrl: "https://www.armytech.com.ar/Image/0/110_110-MOUSEPAD%20REDRAGON%20P029%20Flick%20S.jpg",
    },
    {
        id: "abc002",
        title: "TECLADO LOGITECH K120",
        price: 783.44,
        stock: 7,
        initial: 1,
        description: null,
        pictureUrl: "https://www.armytech.com.ar/Image/0/110_110-logitech.jpg",
    },
    {
        id: "abc003",
        title: "MOUSE LOGITECH M170 Wiireless",
        price: 975.71,
        stock: 9,
        initial: 1,
        description: "Sólida conexión inalámbrica estable a distancias de hasta 10 metros (33 ft). Sin apenas retrasos ni interferencias, el juego y el trabajo serán más previsibles.Pruebas realizadas a una distancia de 10 metros. El radio de acción inalámbrico puede variar ligeramente según las condiciones del equipo y el entorno.",
        pictureUrl: "https://www.armytech.com.ar/Image/0/110_110-m170.jpg",
    },
    {
        id: "abc004",
        title: "PENDRIVE 64GB USB3.0 KINGSTON DTIG4",
        price: 1070.85,
        stock: 10,
        initial: 1,
        description: null,
        pictureUrl: "https://www.armytech.com.ar/Image/0/110_110-PENDRIVE%2064GB%20USB3.0%20KINGSTON%20DTIG4.jpg",
},
  ];
  return (
    <div className="App">
      <NavBar />
      {/*<ItemListContainer greetings="IT-Resources Tienda Online" listaObjetos={listaObjetos}/>*/}
      <ItemDetailContainer item={listaObjetos[2]} />
    </div>
  );
}

export default App;
