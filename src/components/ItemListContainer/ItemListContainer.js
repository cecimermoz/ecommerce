import React, {useState, useEffect} from 'react';
import {TextoPrincipal, ListContainer} from "./style";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({greetings, listaObjetos}) => {

    const [objetos, setObjetos] = useState([]);
    const [title, setTitle] = useState(greetings);
    const {categoryId} = useParams();

    const cargaDatos = new Promise((respuesta, error) => {
        setTimeout(() => {
            listaObjetos.length ? respuesta(listaObjetos) : error("No hay items") 
        }, 2000)
    });

    useEffect(()=>{
        // reemplazar los if por variable CategoryId modificar tmb setTitle
        categoryId === 'accesorios' ? (
            cargaDatos.then((lista) => {
                setObjetos(lista.filter(objeto => objeto.category === 'accesorios'))  
                setTitle("IT-Resources - Accesorios")
            }).catch((error) => alert("No hay ningún Item para Accesorios"))
        ) : categoryId === 'hardware' ? (
            cargaDatos.then((lista) => {
                setObjetos(lista.filter(objeto => objeto.category === 'hardware'))  
                setTitle("IT-Resources - Hardware")
            }).catch((error) => alert("No hay ningún Item para Hardware"))
        ) : (
            cargaDatos.then((lista) => {
                setObjetos(lista)  
            }).catch((error) => alert("Error absoluto!!!!!")))
    },[categoryId])
    

    return(
        <>
            <TextoPrincipal> {title} </TextoPrincipal>
            <ListContainer>
                <ItemList listaObjetos={objetos} />
            </ListContainer>
            
        </>
    )
}

export default ItemListContainer;