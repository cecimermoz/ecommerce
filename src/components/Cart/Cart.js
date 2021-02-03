import React, {useState, useContext, useEffect} from 'react';
import { CartContext } from "../CartContext/CartContext";
import { LoaderGif } from "../loader-gif-style";
import { CardItem, SpanPrice, CardTitle } from "../Item/style";
import ItemCount from "../ItemCount/ItemCount";
import { ItemDetailContainer } from "../ItemDetail/style";

const Cart = () => {
    const { cartList } = useContext(CartContext);
    const [loading, setLoading] = useState(true);
    const [precioTotal, setPrecioTotal] = useState(0);
    const [itemList, setItemList] = useState([]);

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
            calcPrice();
        });
    },[itemList]);
    

    function calcPrice () {
        console.log("si")
        let price = precioTotal;
        cartList.forEach(e => {
           price = price + (e.item.price * e.quantity);
        });
        setPrecioTotal(price)
    }

    return(
        loading ? <LoaderGif /> : 
        <ItemDetailContainer style={{flexDirection: "column", height: "auto"}}>

            {cartList && cartList.map( (e,i) => (
                
                <CardItem key={i}>
                    <CardTitle>{e.item.title}</CardTitle>
                    <img src={e.item.pictureUrl} alt=''  style={{width: "100px"}} />
                    <SpanPrice>{`$ ${e.item.price}`}</SpanPrice>
                    <div style={{color: "red"}}>{`Cantidad ${ e.quantity }`}</div>
                    <ItemCount item={e.item}/>
                    {}
                </CardItem>

            ))}
            <SpanPrice>Importe total de la compra: $ {precioTotal}</SpanPrice>
        </ItemDetailContainer>
        
    )
}



export default Cart;