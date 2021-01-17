import React from 'react';
import {TextoPrincipal, ListContainer} from "./style";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = ({greetings}) => {
       
    const listaObjetos = [
        {
            id: "abc001",
            title: "MOUSEPAD REDRAGON P029 Flick S",
            price: 959.53,
            pictureUrl: "https://www.armytech.com.ar/Image/0/110_110-MOUSEPAD%20REDRAGON%20P029%20Flick%20S.jpg",
        },
        {
            id: "abc002",
            title: "TECLADO LOGITECH K120",
            price: 783.44,
            pictureUrl: "https://www.armytech.com.ar/Image/0/110_110-logitech.jpg",
        },
        {
            id: "abc003",
            title: "MOUSE LOGITECH M170 Wiireless",
            price: 975.71,
            pictureUrl: "https://www.armytech.com.ar/Image/0/110_110-m170.jpg",
        },
        {
            id: "abc004",
            title: "PENDRIVE 64GB USB3.0 KINGSTON DTIG4",
            price: 1070.85,
            pictureUrl: "https://www.armytech.com.ar/Image/0/110_110-PENDRIVE%2064GB%20USB3.0%20KINGSTON%20DTIG4.jpg",
    },
    ];

    const cargaDatos = new Promise((respuesta, error) => {
        setTimeout(() => {
            listaObjetos.length ? respuesta(listaObjetos) : error("No hay items") 
        }, 2000)
    });

    return(
        <>
            <TextoPrincipal> {greetings} </TextoPrincipal>
            <ListContainer>
                {cargaDatos.then((objetos) => {
                    <ItemList listaObjetos={objetos} />
                }).catch((error) => alert(error))}
            </ListContainer>
        </>
    )
}

export default ItemListContainer;