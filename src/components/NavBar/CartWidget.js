import React, {useContext} from 'react';
import { CartBubble } from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from "../CartContext/CartContext";


const CardWidget = () => {

    const {contador, setContador} = useContext(CartContext);

    return(
        <React.Fragment>
            <FontAwesomeIcon icon={faShoppingCart} color="#cd003c" style={{transform: 'scale(1.75)'}} />
            <CartBubble>{contador}</CartBubble>
        </React.Fragment>
    )

}


export default CardWidget;