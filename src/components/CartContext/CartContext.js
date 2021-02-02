import React, {useState, useEffect} from 'react';

export const CartContext = React.createContext(0);

export const Context = ({children}) => {
    const [contador, setContador] = useState(0);
    const [cartList, setCartList] = useState([]);
    const [isInCartCheck, setIsInCartCheck] = useState('');
    
    useEffect(() => {
        console.log("cartList", cartList)
    }, [cartList])

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
    const removeItem = (itemId) => {
        cartList.forEach( (e, i) => {
            e.id === itemId && setCartList(cartList.splice(1, i));
        })
    }
    const clear = () => {
        cartList.length > 0 
        ? setCartList([])
        : alert('El carrito ya está vacío');
    }
    const isInCart = (id) => {
        cartList.forEach(i => i.id === id ? setIsInCartCheck(true) : setIsInCartCheck(false));
        return isInCartCheck
    }
    
    return(
        <CartContext.Provider value={{contador, setContador, cartList, setCartList, addItem, removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}

