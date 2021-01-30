import React from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { ItemDetailContainer, ItemPrecio, ItemTextContainer } from "./style";


const ItemDetail = ({item}) => {
    
    const { itemId } = useParams();

    return(
        <ItemDetailContainer>
            <img src={`${item.pictureUrl}`} alt={`Imagen de ${item.title}`}/>
            <ItemTextContainer>
                <h2>{item.title}</h2>
                <p>{item.description ? item.description : "Sin descripción disponible"}</p>
                <ItemPrecio>Precio: $ {item.price}</ItemPrecio>
                <ItemCount item={item}/>
                <p>{item.stock > 0 ? `Stock disponible: ${item.stock}` : `No hay Stock disponible de este producto`}</p>
            </ItemTextContainer>
        </ItemDetailContainer>
    )
}

export default ItemDetail;