import React, {useState, useEffect} from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({item}) => {
    const [gettedItem, setGettedItem] = useState({});

    const getItems = new Promise((res, err) => {
        setTimeout(()=>{
            item ? res(item) : err("No seleccionaste ningun item, chamigo") 
        },2000);
    });

    useEffect(()=>{
        getItems.then((item)=>{
            setGettedItem(item)
        }).catch(error => console.log(error));
    },[]);

    return(
        <>
        <ItemDetail item={gettedItem}/>
        </>
    )
}

export default ItemDetailContainer;