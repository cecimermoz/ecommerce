import React , { useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import {ItemDetailContainer, ImgCard, ItemTextContainer, ItemPrecio} from "./style";
import { useParams } from "react-router-dom";


const ItemDetail = ({item}) => {
    
    const { itemId } = useParams();

    useEffect(() => {
        console.log("watch change of ", itemId);
    }, [itemId])


    return(
        <ItemDetailContainer>
            <ImgCard src={item.pictureUrl}/>
            <ItemTextContainer>
                <h2>{item.title}</h2>
                <p>{item.description ? item.description : "Sin descripción disponible"}</p>
                <ItemPrecio>Precio: $ {item.price}</ItemPrecio>
                <ItemCount stock={item.stock} initial={item.initial}/>
            </ItemTextContainer>
        </ItemDetailContainer>
    )
}

export default ItemDetail;