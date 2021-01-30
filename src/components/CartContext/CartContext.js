import React, {useState, useEffect} from 'react';

export const CartContext = React.createContext(0);

export const Context = ({children}) => {
    const [contador, setContador] = useState(0);
    const [cartList, setCartList] = useState([]);
    
    useEffect(() => {
        console.log("cartList", cartList)
    }, [cartList])

    const addItem = (item, quantity) => {
        cartList.forEach(i => {
            i.id === item.id
            ? alert('Este item ya está en tu carrito')
            : setCartList(...cartList, {item, quantity});
        });
        console.log("cartList 2", cartList)

    }
    const removeItem = (itemId) => {
        cartList.forEach( (e, i) => {
            e.id === itemId && cartList.splice(1, i);
        })
    }
    const clear = () => {
        cartList.length > 0 
        ? cartList = []
        : alert('El carrito ya está vacío');
    }
    const isInCart = (id) => {
        let item = null;
        cartList.forEach(i => {
            i.id === id ? item = true : item = false;
        });
        return item;
    }
    
    return(
        <CartContext.Provider value={{contador, setContador, cartList, setCartList, addItem, removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}