import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "../CartContext/CartContext";
import { ButtonAddSurp, ButtonShop, ItemCartButton, ItemCountDiv } from "./style";



const CartCount = ({item, calcPrice}) => {
    const [valorSeleccionado, setValorSeleccionado] = useState(item.quantity);
    const {contador, setContador, cartList, setCartList, addItem, removeItem, clear, isInCart} = useContext(CartContext);

    return(

        <ItemCartButton>
            <ButtonAddSurp 
            style={{width:'100%'}}
            onClick={()=>{
                removeItem(item)
                calcPrice()
                }}>Eliminar</ButtonAddSurp>
        </ItemCartButton>

    )
}

export default CartCount;