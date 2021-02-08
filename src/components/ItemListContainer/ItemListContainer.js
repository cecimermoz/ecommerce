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
    const listadoDB = db.collection('items');
    const accesories = listadoDB.where('categoryId', '==', 'accesorios')
    const hardware = listadoDB.where('categoryId', '==', 'hardware')

    // Firebase
    useEffect(()=>{
        // If theres no filter from the params()
        !categoryId && 
            setLoading(true);
            listadoDB.get().then((query) => {
                query.size === 0 && console.log('SIN RESULTADOS DESDE DB')
                setObjetos(query.docs.map( item => item.data()))
            })
            .catch((err) => alert(err))
            .finally(() => setLoading(false));
        ;

        // If Params() = Accesorios
        categoryId === 'Accesorios' && ( 
            accesories.get().then((q) => {
                (q.size === 0) && console.log("No hay ningún Item para Accesorios")
                setObjetos(q.docs.map(objeto => objeto.data()))  
                setTitle("IT-Resources - Accesorios")
            })
            .finally(()=>{
                setLoading(false);
            })
        ) 

        // If Params() = Hardware
        categoryId === 'Hardware' && ( 
            hardware.get().then((q) => {
                (q.size === 0) && console.log("No hay ningún Item para Accesorios")
                setObjetos(q.docs.map(objeto => objeto.data()))  
                setTitle("IT-Resources - Hardware")
            })
            .finally(()=>{
                setLoading(false);
            })
        ) 

    },[categoryId])
    
    /*) : (
            listadoDB.get().then((lista) => {
                setObjetos(lista.docs.data())  
            }).catch((error) => console.log(error)))
            .finally(()=>{
                setLoading(false);
            })*/


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