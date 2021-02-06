import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "../CartContext/CartContext";
import { ButtonAddSurp, ButtonShop, ItemCartButton, ItemCountDiv } from "./style";



const CartCount = ({item, calcPrice}) => {
    console.log('this item', item)
    const [valorSeleccionado, setValorSeleccionado] = useState(item.quantity);
    const {contador, setContador, cartList, setCartList, addItem, removeItem, clear, isInCart} = useContext(CartContext);

    return(

        <ItemCartButton>
            <ButtonAddSurp onClick={()=>{
                removeItem(item)
                calcPrice()
                }}>Eliminar</ButtonAddSurp>
        </ItemCartButton>

    )
}

export default CartCount;