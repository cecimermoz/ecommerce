import '@firebase/firestore';
import firebase from 'firebase/app';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { getFirestore } from "../../firebase";
import { CartContext } from "../CartContext/CartContext";
import { CardItem, CardTitle, SpanPrice } from "../Item/style";
import CartCount from "../ItemCount/CartCount";
import { ButtonShop } from "../ItemCount/style";
import { ItemDetailContainer } from "../ItemDetail/style";
import { TextoPrincipal } from "../ItemListContainer/style";
import { LoaderGif } from "../loader-gif-style";


const Cart = () => {
    
    
    const { cartList, clearCart } = useContext(CartContext);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState({});
    const [stockActual, setStockActual] = useState()
    const [orderId, setOrderId] = useState({});
    const [precioTotal, setPrecioTotal] = useState(0);
    const buyerInfo = {
        name: 'ceci',
        phone: 1234,
        email: 'q@q.com',
    }

    
    useEffect(()=>{
        console.log('En useEffect, stockActual --> ', stockActual)
    },[stockActual]);
    
    useEffect(()=>{
        calcPrice()
        setLoading(false)
    },[cartList]);

    useEffect(()=>{
        setOrder({
            
            buyer: buyerInfo,
            items: cartList,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: precioTotal,
              
        })        
    },[precioTotal]);

    function calcPrice () {
        let price = 0;
        cartList.forEach(e => {
            price = price + (e.item.price * e.quantity);
        });
        setPrecioTotal(price.toFixed(2))
    }
    
    async function handleOrder(){
        setLoading(true)
        const db = getFirestore();
        const ordersDB = db.collection('orders');

        if(order.items.length > 1){ 
            const itemsCarrito = order.items;

            // Esto es método de Firebase tal cual ------
            const itemsToUpdate =  db.collection('items').where(firebase.firestore.FieldPath.documentId(), 'in', itemsCarrito.map( i => i.item.id ));
            // ------------------------------------------   
            const query = await itemsToUpdate.get();
            const batch = db.batch();
            const outOfStock = [];

            query.docs.forEach((doc, idx) => {
                if(doc.data().stock >= itemsCarrito[idx].quantity){

                    let ths = doc.data().stock;
                    batch.update(doc.ref, { stock: ths - itemsCarrito[idx].quantity})

                } else {
                    outOfStock.push({...doc.data(), id: doc.item.id})
                }
            })
            
            if (outOfStock.length === 0){
                
                await batch.commit();
                setLoading(false);
                alert('Compra realizada con éxito');
                clearCart();

            } else { alert('No hay suficiente Stock')}


        } else {
            ordersDB.add(order)
            .then((doc) => {
                setOrderId(doc.id)
                
                doc.get().then((arrDoc) => {
                    arrDoc.data().items.forEach( (i) => {
                        
                        let qtyToReduce = i.quantity;
                        let docActual = db.collection('items').doc(i.item.id);
                        docActual.get().then( d => 
                            setStockActual(d.data().stock)
                        );
                        docActual.update({
                            stock: stockActual - qtyToReduce
                        })           
                    })
                })
            })
            .catch((e)=>{console.log('No funciono el add.order',e)})
            .finally(()=> setLoading(false))
        }        
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
                        <ButtonShop onClick={handleOrder} style={{maxWidth: '150px'}}>Confirmar Compra</ButtonShop>
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