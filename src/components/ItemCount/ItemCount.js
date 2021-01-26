import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { ItemCountDiv , ItemCountButtons , ButtonShop , ButtonAddSurp} from "./style";

const ItemCount = ({stock, initial}) => {
    const [count, setCount] = useState(0);
    const [showButton, setShowButton] = useState(false);
    const stockMax = stock;
    const [valorSeleccionado, setValorSeleccionado] = useState(initial);

    useEffect(()=>{
        setValorSeleccionado(initial)
    },[initial ]);
    
    const sumar = () => {
        valorSeleccionado < stockMax && setValorSeleccionado( valorSeleccionado + 1 )
    }

    const reducir = () => {
        valorSeleccionado > initial && setValorSeleccionado( valorSeleccionado - 1 )
    }

    const onAdd = (num) => {
        setCount(num);
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
                <ButtonShop onClick={()=>{onAdd(valorSeleccionado)}}>Comprar</ButtonShop>
            :
                <Link to={'/cart'}><ButtonShop>Terminar compra</ButtonShop></Link>
            }

       </ItemCountDiv>
    )
}

export default ItemCount;