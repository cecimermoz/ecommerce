import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore } from "../../firebase";
import { LoaderGif } from "../loader-gif-style";

const ItemDetailContainer = () => {
    const paramId = useParams();
    //console.log('param',paramId)
    const [loading, setLoading] = useState(true);

    const [gettedItem, setGettedItem] = useState({});
    
    useEffect(()=>{
        const db = getFirestore();
        const listadoDB = db.collection('items');
        const itemDB = listadoDB.doc(paramId.itemId);
        
        itemDB.get().then((doc) => {
            if(!doc.exists) {
                console.log('No existe ningún item')
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

    useEffect(()=>{
       
    },[gettedItem])

    return(
        loading ? <LoaderGif /> : <ItemDetail item={gettedItem}/>
    )
}

export default ItemDetailContainer;