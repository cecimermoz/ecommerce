import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDatailContainer/ItemDetailContainer"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Context } from "./components/CartContext/CartContext";

function App() {
  const listaObjetos = [
    {
        id: "abc001",
        title: "MOUSEPAD REDRAGON P029 Flick S",
        price: 959.53,
        stock: 3,
        category: 'accesorios',
        initial: 1,
        description: null,
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_892778-MLA43833766719_102020-O.webp",
    },
    {
        id: "abc002",
        title: "TECLADO LOGITECH K120",
        price: 783.44,
        stock: 7,
        category: 'hardware',
        initial: 1,
        description: "Este teclado Logitech es el mejor complemento para hacer todo tipo de actividades. Es cómodo y práctico al momento de redactar documentos, navegar y hacer búsquedas por internet, ya sea en tu trabajo o en la comodidad del hogar",
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_815666-MLA32722390520_102019-O.webp",
    },
    {
        id: "abc003",
        title: "MOUSE LOGITECH M170 Wiireless",
        price: 975.71,
        stock: 9,
        category: 'hardware',
        initial: 1,
        description: "Sólida conexión inalámbrica estable a distancias de hasta 10 metros (33 ft). Sin apenas retrasos ni interferencias, el juego y el trabajo serán más previsibles.Pruebas realizadas a una distancia de 10 metros. El radio de acción inalámbrico puede variar ligeramente según las condiciones del equipo y el entorno.",
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_646248-MLA31037727069_062019-F.webp",
    },
    {
        id: "abc004",
        title: "PENDRIVE 64GB USB3.0 KINGSTON DTIG4",
        price: 1070.85,
        stock: 10,
        category: 'accesorios',
        initial: 1,
        description: "Capacidad: 64GB Dimensiones: 55 mm x 21 mm x 10,1 mm Peso: 10,31 g Temperatura de funcionamiento: entre 0°C y 60°C Temperatura de almacenamiento: entre -20°C y 85°C",
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_708228-MLA42289464396_062020-O.webp",
    },
    {
      id: "abc005",
      title: "Notebook Thinkpad Lenovo E14 i5-10210U 8GB DDR4 Disco SSD 256GB M.2 NVme W10 PRO",
      price: 109999.14,
      stock: 6,
      category: 'hardware',
      initial: 1,
      description: "ESPECIFICACIONES TÉCNICAS: Procesador: Intel Core i5-10210U Processor ( 1.60GHz 6MB ). Sistema operativo: Windows 10 Pro 64. Tamaño Pantalla: 14. Memoria: 8.0GB DDR4-2666 DDR4 SODIMM 2666MHz. Unidad de disco primaria: 256GB SSD PCIe NVMe",
      pictureUrl: "https://www.lenovo.com/medias/lenovo-thinkpad-e14-hero-1126.png?context=bWFzdGVyfHJvb3R8ODY2NDl8aW1hZ2UvcG5nfGhkZi9oMWIvMTA2NzMyMDY4ODY0MzAucG5nfDI4YjQ3MWM3NWU0YTE4MDdlMzg4ODQxYTk3NDQwOWQ1OTNkMzYxZjdhYmU3NjdlYjYxM2YzNTU3NDkwZmJjNDE",
  }, 
  ];
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
            <ItemListContainer greetings="IT-Resources Tienda Online" listaObjetos={listaObjetos}/>
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
