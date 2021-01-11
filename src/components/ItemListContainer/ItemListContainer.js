import React from 'react';
import {TextoPrincipal} from "./style"

const ItemListContainer = ({greetings}) => {
    return(
        <TextoPrincipal> {greetings} </TextoPrincipal>
    )
}

export default ItemListContainer;