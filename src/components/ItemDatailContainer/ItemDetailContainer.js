import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from "../../firebase";
import ItemDetail from "../ItemDetail/ItemDetail";
import { LoaderGif } from "../loader-gif-style";

const ItemDetailContainer = () => {
    const paramId = useParams();
    const [loading, setLoading] = useState(true);
    const [gettedItem, setGettedItem] = useState({});
    
    useEffect(()=>{
        const db = getFirestore();
        const listadoDB = db.collection('items');
        const itemDB = listadoDB.doc(paramId.itemId);
        
        itemDB.get().then((doc) => {
            if(!doc.exists) {
                return;
            };
            setGettedItem({
                id: doc.id,
                ...doc.data()
            })
        })
        .catch(error => console.log(error))
        .finally(()=>{
            setLoading(false);
        });
    },[paramId]);

    return(
        loading ? <LoaderGif /> : <ItemDetail item={gettedItem}/>
    )
}

export default ItemDetailContainer;