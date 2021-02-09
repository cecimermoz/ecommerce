import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { CartContext } from "../CartContext/CartContext";
import { LoaderGif } from "../loader-gif-style";
import ItemCount from "../ItemCount/ItemCount";
import { TableWrapper } from "./style";
import { CardItem, CardTitle, SpanPrice } from "../Item/style";
import CartCount from "../ItemCount/CartCount";
import { ItemDetailContainer } from "../ItemDetail/style";
import { LoaderGif } from "../loader-gif-style";
import { Link } from "react-router-dom";
import { TextoPrincipal } from "../ItemListContainer/style";
import { ButtonShop } from "../ItemCount/style";


const Cart = () => {
    const { cartList, clearCart } = useContext(CartContext);
    const [loading, setLoading] = useState(true);
    const [precioTotal, setPrecioTotal] = useState(0);
    const [itemList, setItemList] = useState([]);
    console.log('inicia en, ',precioTotal);

    const getItems = new Promise((res, err) => {
        setTimeout(()=>{
            cartList.length ? res(cartList) : err("No seleccionaste ningun item, chamigo") 
        },500);
    });

    useEffect(()=>{
        getItems.then((cartList)=>{
            setItemList(cartList)
        }).catch(error => console.error(error))
        .finally(()=>{
            setLoading(false);
        });
    },[itemList]);

    useEffect(() => {
        calcPrice()
    }, [cartList]);

    function calcPrice () {
        let price = 0;
        cartList.forEach(e => {
            price = price + (e.item.price * e.quantity);
        });
        setPrecioTotal(price.toFixed(2))
    }

    return(
        loading ? <LoaderGif /> : 
        <ItemDetailContainer style={{flexDirection: 'column', height: "auto"}}>

            {cartList.length < 1 
                ?
                    <>
                        <TextoPrincipal style={{fontWeight:'400'}} >Aún no hay ningún ítem seleccionado</TextoPrincipal> 
                        <Link to={'/'}><ButtonShop>Buscar productos</ButtonShop></Link>
                    </>
                : 
                    <>
                        <div style={{display:'flex', justifyContent: 'space-between'}}>
                        {cartList && cartList.map( (e,i) => (
                            
                            <CardItem key={i} style={{margin: '20px 15px', position: 'relative', justifyContent: 'center'}}>

                                <CartBubble>{ e.quantity }</CartBubble>
                                <CardTitle>{e.item.title}</CardTitle>
                                <img src={e.item.pictureUrl} alt='' />
                                <SpanPrice>{`$ ${e.item.price}`}</SpanPrice>
                                <CartCount item={e} calcPrice={calcPrice}/> 
                                
                            </CardItem>  

                        ))}
                        </div>
                        <SpanPrice>Importe total de la compra: <span style={{fontWeight:'700'}}>$ {precioTotal}</span></SpanPrice>
                        <ButtonShop onClick={clearCart} style={{maxWidth: '150px'}}>Vaciar carrito</ButtonShop>
                    </>
            }

            


        </ItemDetailContainer>
        
    )
}

const CartBubble = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    background-color: #ed4172;
    color: white;
    font-size: 22px;
    font-weight: 700;
    position: absolute;
    border-radius: 100%;
    top: -15px;
    line-height: 0;
    padding: 0 !important;
    right: -15px;
    justify-content: center;
    align-items: center;
`;

export default Cart;