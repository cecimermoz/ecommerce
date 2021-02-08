import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore } from "../../firebase";
import { LoaderGif } from "../loader-gif-style";

const ItemDetailContainer = () => {
    const itemParams = useParams();
    // const item = listaObjetos.filter(i => i.id === itemParams.itemId);  
    const db = getFirestore();
    const listadoDB = db.collection('items');
    const itemDB = listadoDB.where('categoryId', '==', 'accesorios')
    
    const [gettedItem, setGettedItem] = useState(item.length ? item[0] : {});
    const [loading, setLoading] = useState(true);

    const getItems = new Promise((res, err) => {
        setTimeout(()=>{
            item.length ? res(item[0]) : err("No seleccionaste ningun item, chamigo") 
        },2000);
    });

    useEffect(()=>{
        getItems.then((item)=>{
            setGettedItem(item)
        }).catch(error => console.log(error))
        .finally(()=>{
            setLoading(false);
        });
    },[]);

    return(
        loading ? <LoaderGif /> : <ItemDetail item={gettedItem}/>
    )
}

export default ItemDetailContainer;