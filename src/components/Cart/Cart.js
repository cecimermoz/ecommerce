import React, {useState, useContext, useEffect} from 'react';
import { CartContext } from "../CartContext/CartContext";
import { LoaderGif } from "../loader-gif-style";
import ItemCount from "../ItemCount/ItemCount";
import { TableWrapper } from "./style";

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
        <TableWrapper style={{}}>

            {cartList && cartList.map( (e,i) => (
                
                <div key={i}>
                    <div>{e.item.title}</div>
                    <img src={e.item.pictureUrl} alt=''  style={{width: "100px"}} />
                    <div>{`$ ${e.item.price}`}</div>
                    <div style={{color: "red"}}>{`Cantidad ${ e.quantity }`}</div>
                    <div item={e.item}/>
                    {}
                </div>

            ))}
            <div>Importe total de la compra: $ {precioTotal}</div>
        </TableWrapper>
        
    )
}



export default Cart;