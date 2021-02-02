import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "../CartContext/CartContext";
import { ButtonAddSurp, ButtonShop, ItemCountButtons, ItemCountDiv } from "./style";

const ItemCount = ({item}) => {
    const [showButton, setShowButton] = useState(false);
    const [valorSeleccionado, setValorSeleccionado] = useState(item.initial);
    
    // pasarle todo lo mismo q recibo
    const {contador, setContador, cartList, setCartList, addItem, removeItem, clear, isInCart} = useContext(CartContext);

    useEffect(()=>{
        setValorSeleccionado(item.initial)
    },[item.initial ]);
    
    const sumar = () => {
        valorSeleccionado < item.stock && setValorSeleccionado( valorSeleccionado + 1 )
    }

    const reducir = () => {
        valorSeleccionado > item.initial && setValorSeleccionado( valorSeleccionado - 1 )
    }

    const onAdd = (item, num) => {
        addItem(item, num)
        setContador(contador+num);
        setShowButton(true);
    }

    return(
       <ItemCountDiv>
            <ItemCountButtons>
                <ButtonAddSurp onClick={reducir}>-</ButtonAddSurp>
                <span>{valorSeleccionado}</span>
                <ButtonAddSurp onClick={sumar}>+</ButtonAddSurp>
            </ItemCountButtons>
            {!showButton ? 
                <ButtonShop onClick={()=>{onAdd(item, valorSeleccionado)}}>Comprar</ButtonShop>
            :
                <Link to={'/cart'}><ButtonShop onClick={console.log('Esto me llevaría al ./Cart')}>Terminar compra</ButtonShop></Link>
            }

       </ItemCountDiv>
    )
}

export default ItemCount;