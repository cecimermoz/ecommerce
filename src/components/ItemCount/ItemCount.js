import React, {useState} from "react";
import { ItemCountDiv , ItemCountButtons , ButtonShop , ButtonAddSurp} from "./style";

const ItemCount = ({stock, initial}) => {
    
    const stockMax = stock;
    const [valorSeleccionado, setValorSeleccionado] = useState(initial);

    const sumar = () => {
        valorSeleccionado < stockMax && setValorSeleccionado( valorSeleccionado + 1 )
    }

    const reducir = () => {
        valorSeleccionado > initial && setValorSeleccionado( valorSeleccionado - 1 )
    }

    const onAdd = (num) => {
        console.log(`Compraste ${num} producto/s`);
    }

    return(
       <ItemCountDiv>
            <ItemCountButtons>
                <ButtonAddSurp onClick={reducir}>-</ButtonAddSurp>
                <span>{valorSeleccionado}</span>
                <ButtonAddSurp onClick={sumar}>+</ButtonAddSurp>
            </ItemCountButtons>

            <ButtonShop onClick={onAdd(valorSeleccionado)}>Comprar</ButtonShop>

       </ItemCountDiv>
    )
}

export default ItemCount;