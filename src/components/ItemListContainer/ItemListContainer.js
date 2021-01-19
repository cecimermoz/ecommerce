import React, {useState, useEffect} from 'react';
import {TextoPrincipal, ListContainer} from "./style";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = ({greetings, listaObjetos}) => {
    const [objetos, setObjetos] = useState([]);

    const cargaDatos = new Promise((respuesta, error) => {
        setTimeout(() => {
            listaObjetos.length ? respuesta(listaObjetos) : error("No hay items") 
        }, 2000)
    });

    useEffect(()=>{
        cargaDatos.then((lista) => {
          setObjetos(lista)  
        }).catch((error) => alert(error))
    },[])
    
    return(
        <>
            <TextoPrincipal> {greetings} </TextoPrincipal>
            <ListContainer>
                <ItemList listaObjetos={objetos} />
            </ListContainer>
        </>
    )
}

export default ItemListContainer;