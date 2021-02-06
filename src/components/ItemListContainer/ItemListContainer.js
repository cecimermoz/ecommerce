import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";
import ItemList from "../ItemList/ItemList";
import { LoaderGif } from "../loader-gif-style";
import { ListContainer, TextoPrincipal } from "./style";


const ItemListContainer = ({greetings}) => {

    const [loading, setLoading] = useState('');
    const [objetos, setObjetos] = useState([]);
    const [title, setTitle] = useState(greetings);
    const {categoryId} = useParams();
    const db = getFirestore();
    const listaObjetos = db.collection('items');
    /* const cargaDatos = new Promise((respuesta, error) => {
        setTimeout(() => {
            listaObjetos.length ? respuesta(listaObjetos) : error("No hay items") 
        }, 2000)
    }); */

    // Firebase
    useEffect(()=>{
        setLoading(true);
        listaObjetos.get().then((query) => {
            query.size === 0 && console.log('SIN RESULTADOS DESDE DB')
            setObjetos(query.docs.map( item => item.data()))
        })
        .catch((err) => alert(err))
        .finally(() => setLoading(false));
    }, []);


 
    // ItemList methods
    useEffect(()=>{
        // reemplazar los if por variable CategoryId modificar tmb setTitle
        categoryId === 'accesorios' ? (
            listaObjetos.get().then((lista) => {
                setObjetos(lista.filter(objeto => objeto.category === 'accesorios'))  
                setTitle("IT-Resources - Accesorios")
            }).catch((error) => alert("No hay ningún Item para Accesorios"))
            .finally(()=>{
                setLoading(false);
            })
        ) : categoryId === 'hardware' ? (
            listaObjetos.get().then((lista) => {
                setObjetos(lista.filter(objeto => objeto.category === 'hardware'))  
                setTitle("IT-Resources - Hardware")
            }).catch((error) => alert("No hay ningún Item para Hardware"))
            .finally(()=>{
                setLoading(false);
            })
        ) : (
            listaObjetos.get().then((lista) => {
                setObjetos(lista)  
            }).catch((error) => alert("Error absoluto!!!!!")))
            .finally(()=>{
                setLoading(false);
            })
    },[categoryId])
    


    return(
        loading ? <LoaderGif /> : 
            <>
                <TextoPrincipal> {title} </TextoPrincipal>
                <ListContainer>
                    <ItemList listaObjetos={objetos} />
                </ListContainer>
                
            </>
    )
}

export default ItemListContainer;