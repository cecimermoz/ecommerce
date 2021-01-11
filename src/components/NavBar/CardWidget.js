import React from 'react';
import { CartBubble } from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

class CardWidget extends React.Component {
    render(){
        return(
            <React.Fragment>
                <FontAwesomeIcon icon={faShoppingCart} color="#cd003c" transform="grow-6" />
                <CartBubble />
            </React.Fragment>
        )
    }
}


export default CardWidget;