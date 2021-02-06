import React, {useState, useEffect} from 'react';

export const CartContext = React.createContext(0);

export const Context = ({children}) => {
    const [contador, setContador] = useState(0);
    const [cartList, setCartList] = useState([]);
    const [isInCartCheck, setIsInCartCheck] = useState('');

    const addItem = (item, quantity) => {
        let itemExiste = cartList.some( i => i.item.id === item.id  );
        
        if(!itemExiste){
            setCartList([...cartList, {item, quantity}])
        }else{
            let items = cartList.map(producto => {
                if (producto.item === item) {
                    producto.quantity = producto.quantity + quantity;
                    return producto;
                  } else {
                    return producto; // retorna los objetos que no son los duplicados
                }
            }); 
            setCartList(items);
        }       
    }
    const removeItem = (itemToDelet) => {

        cartList.forEach( (producto, i, arr) => {
            if(producto.item.id === itemToDelet.item.id){
                cartList.splice(i, 1);
                setContador(contador - producto.quantity);
                setCartList(arr);
            }
        })

    }
    const clearCart = () => {
        if(cartList.length > 0){
            setCartList([])
            setContador(0) 
        } else alert('El carrito ya está vacío');
    }
    const isInCart = (id) => {
        cartList.forEach(i => i.id === id ? setIsInCartCheck(true) : setIsInCartCheck(false));
        return isInCartCheck
    }
    
    return(
        <CartContext.Provider value={{contador, setContador, cartList, setCartList, addItem, removeItem, clearCart, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}

