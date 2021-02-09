import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import {CardItem, SpanPrice, CardTitle, CardLink} from "./style";


const Item = ({item}) => {

    const {id, title, price, pictureUrl} = item;

    return(
        <CardItem>
            <CardLink to={`/item/${id}`}>
                <CardTitle>{title}</CardTitle>
                <img src={pictureUrl} style={{maxHeight: "170px", maxWidth: '250px'}} alt={title}/>
                <SpanPrice>{`ARS $ ${price}`}</SpanPrice>
            </CardLink>
            <ItemCount item={item}/>
        </CardItem>
    )
}

export default Item;