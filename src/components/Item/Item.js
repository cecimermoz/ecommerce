import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import {CardItem, SpanPrice, CardTitle} from "./style";
import { Link } from "react-router-dom";


const Item = ({item}) => {

    const {id, title, price, pictureUrl} = item;

    return(
        <Link to={`/item/${id}`}>
            <CardItem>
                <CardTitle>{title}</CardTitle>
                <img src={pictureUrl} style={{width: "70%"}} alt={title}/>
                <SpanPrice>{`ARS $ ${price}`}</SpanPrice>
                <ItemCount stock={5} initial={1} />
            </CardItem>
        </Link>
    )
}

export default Item;