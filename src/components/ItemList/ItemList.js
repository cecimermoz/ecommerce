import Item from "../Item/Item";

const ItemList = ({listaObjetos}) => {
    
    return(
        listaObjetos.map((cadaItem,i,a) => {
            return <Item item={cadaItem} key={`item-${i}-de-${a}`}/>
        })
    )
}

export default ItemList;