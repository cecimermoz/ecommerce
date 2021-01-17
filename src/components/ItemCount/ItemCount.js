import React, {useState, useEffect} from "react";
import { ItemCountDiv , ItemCountButtons , ButtonShop , ButtonAddSurp} from "./style";

const ItemCount = ({stock, initial}) => {
    
    const [stockMax, setStockMax] = useState(stock);
    const [valorSeleccionado, setValorSeleccionado] = useState(initial);

    const onAdd = () => {
        valorSeleccionado < stockMax && setValorSeleccionado( valorSeleccionado + 1 )
    }

    const onSustract = () => {
        valorSeleccionado > initial && setValorSeleccionado( valorSeleccionado - 1 )
    }

    const alerta = () => {
        alert("Compraste");
    }

    return(
       <ItemCountDiv>
            <ItemCountButtons>
                <ButtonAddSurp onClick={onSustract}>-</ButtonAddSurp>
                <span>{valorSeleccionado}</span>
                <ButtonAddSurp onClick={onAdd}>+</ButtonAddSurp>
            </ItemCountButtons>

            <ButtonShop onClick={alerta}>Comprar</ButtonShop>

       </ItemCountDiv>
    )
}

export default ItemCount;