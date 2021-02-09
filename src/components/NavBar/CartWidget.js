import React, {useContext} from 'react';
import { CartBubble } from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";


const CardWidget = () => {

    const {contador} = useContext(CartContext);

    return(
        <Link to={'/cart'}>
            <FontAwesomeIcon icon={faShoppingCart} color="#cd003c" style={{transform: 'scale(1.75)'}} />
            <CartBubble>{contador}</CartBubble>
        </Link>
    )

}


export default CardWidget;